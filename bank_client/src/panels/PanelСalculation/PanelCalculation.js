import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AutocompleteWrapper from "../../components/AutocompleteWrapper/AutocompleteWrapper";
import SliderWrapper from "../../components/SliderWrappe/SliderWrapper";
import TextFieldWrapper from "../../components/TextFieldWrapper/TextFieldWrapper";
import TypographyWrapper from "../../components/TypographyWrapper/TypographyWrapper";
import PanelBlank from "../PanelBlank/PanelBlank";
import './PanelCalculation.css'
const { evaluate } = require('mathjs')

const PanelCalculation = ({openRegPanel=()=>{}}) => {
    const uriTables = "https://a9ca-93-81-207-6.ngrok.io/?tarifServerName="

    const tarifs = [
    { 
      tarifName:'Накопительный счёт', 
      tarifServerName:'savings_acc'
    },
    { 
      tarifName:'Вклад для студентов', 
      tarifServerName:'contribution_for_students'
    }
    ,
    { 
      tarifName:'Вклад для военных', 
      tarifServerName:'contribution_for_the_military'
    }
    ];
    
    const [isDisabled, setIsDisabled] = useState(true)
    const [formula, setFormula] = useState("y*x")
    const [yearValue, setYearValue] = useState(1)
    const [moneyValue, setMoneyValue] = useState(1000)
    const [profit, setProfit] = useState(1000)
    
    const setDefault = () => {
      setFormula("y*x")
      setYearValue(1)
      setMoneyValue(1000)
      setProfit(1000)
    }
    
    //x - количество денег, y - количество лет
    const getResult = (x,y) => Math.floor(evaluate(formula, {x:x,y:y}))
    
    const handleDropDownList = (event, value) =>{
    
      let tarifServetValue = "";
      for(let i=0;i<tarifs.length;i++){
        if(tarifs[i].tarifName === value){
          tarifServetValue = tarifs[i].tarifServerName
        }
      }
    
      if(tarifServetValue !== ""){
        axios.get(uriTables + tarifServetValue).then((resp) =>{
          setFormula(resp.data)
          setProfit(getResult(moneyValue, yearValue))
          setIsDisabled(false)
        })
      }
      else{
        setIsDisabled(true)
        setDefault()
      }
    
    }
    
    //Заработок
    useEffect(()=>{
      setProfit(getResult(moneyValue, yearValue))
    },[yearValue, moneyValue, formula])
    
    
    //Сумма вклада
    const handleChangeMoney = (event) => {
    
      const data = event.target.value;
      if(data.length <= 7 && (/^[0-9]+$/.test(data) || data.length===0)){
        setMoneyValue(event.target.value)
      }
    };
    
    //Года
    const handleChangeYears = (event, newValue) => {
      if (typeof newValue === 'number') {
        setYearValue(newValue);
      }
    };
    const valueLabelFormat = (value) => {
      const units = ['Год', 'Года', 'Лет'];
    
      let unitIndex = 0;
      let scaledValue = value;
    
      if(value === 1){
        unitIndex = 0
      }else if(value<=4){
        unitIndex = 1
      }
      else{
        unitIndex = 2;
      }
    
      return `${scaledValue} ${units[unitIndex]}`;
    }


    return(
      <div className="PanelCalculation">
          <div className="PanelCalculation__title">Калькулятор</div>
          <div className="PanelCalculation_container">

            <div className="PanelCalculation_containerItem">
                <AutocompleteWrapper
                options={tarifs}
                onInputChange={handleDropDownList}
                label="Выберете тариф"
                >
                </AutocompleteWrapper>
            </div>

            <div className="PanelCalculation_containerItem">
                <TextFieldWrapper label="Введите сумму вклада" disabled={isDisabled} onChange={handleChangeMoney} value={moneyValue}/> 
            </div>

            <div className="PanelCalculation_containerItem">

                <TypographyWrapper text={`На срок: ${valueLabelFormat(yearValue)}`}/>

                <SliderWrapper
                    disabled={isDisabled}
                    value={yearValue}
                    min={1}
                    step={1}
                    max={10}
                    onChange={handleChangeYears}
                />
                
            </div>

            <div className="PanelCalculation_containerItem">
                <p className="Profit_title">Сумма на выходе:</p>
                <p className="Profit_money">{profit}</p>
            </div>

          </div>
      </div>

    )
}

export default PanelCalculation