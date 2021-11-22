import React, { useEffect, useState } from "react";
import './App.css';
import {Autocomplete, TextField, Slider, Typography } from '@mui/material/';
import axios from 'axios';
const { evaluate } = require('mathjs')
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const App = () => {
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

const testChange = (event, value) =>{

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
  // if(/^[0-9]+$/.test(data)){
  //   let number = Number(data)
  //   console.log(number)

  //   if(number>=1000 && number<=1000000){
  //     setMoneyValue(event.target.value)
  //   }
  // }
  // const result = /^[0-9]+$/.test(data)
  // console.log(result)

  // setMoneyValue(event.target.value);
  // console.log(event.target.value)
  // if (typeof event.target.value === 'number') {
  //   console.log(event.target.value)
  //   setMoneyValue(event.target.value);
  // }
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

  return (
    <div className="App">

      <div className="App__title">Анализ будущего вклада</div>
      <div className="App_container">

        <div className="App_containerItem">
          <Autocomplete
            options={tarifs.map((tarif)=>tarif.tarifName)}
            sx={{ width: 300 }}
            onInputChange={testChange}
            renderInput={(params) => <TextField {...params} label="Выберете тариф" />}
          />
        </div>

        <div className="App_containerItem">
          <TextField className="App_containerItem" id="filled-basic" label="Введите сумму вклада" disabled={isDisabled} variant="filled" onChange={handleChangeMoney} value={moneyValue}/> 
        </div>

        <div className="App_containerItem">
          <Typography id="non-linear-slider" gutterBottom style={{textAlign:"start", color:"rgba(0, 0, 0, 0.6)"}}>
            На срок: {valueLabelFormat(yearValue)}
          </Typography>
          <Slider
            disabled={isDisabled}
            style={{color:"rgba(0, 0, 0, 0.6)"}}
            value={yearValue}
            min={1}
            step={1}
            max={10}
            // getAriaValueText={valueLabelFormat}
            // valueLabelFormat={valueLabelFormat}
            onChange={handleChangeYears}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
        </div>

        <div className="App_containerItem">
          <p className="Profit_title">Вы заработаете</p>
          <p className="Profit_money">{profit}</p>
        </div>




        </div>
      </div>
  );
}

export default App;
