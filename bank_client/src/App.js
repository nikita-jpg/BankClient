import React, { useEffect, useState } from "react";
import './App.css';
import { About } from "./comonents/About/About";
import { Header } from './comonents/Header/Header';
import { Menu } from "./comonents/Menu/Menu";
import {TabContent} from './comonents/TabContent/TabContent';
import { Tables } from "./comonents/Tables/Tables";
import {Autocomplete, TextField, Slider, Typography, FilledInput } from '@mui/material/';
import axios from 'axios';
const { evaluate } = require('mathjs')
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const App = () => {
  const uriTables = "https://37df-93-81-207-6.ngrok.io/?tarifServerName="

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

const [formula, setFormula] = useState("y*x")
const [yearValue, setYearValue] = useState(1)
const [moneyValue, setMoneyValue] = useState(1000)
const [profit, setProfit] = useState(1000)

//x - количество денег, y - количество лет
const getResult = (x,y) => Math.floor(evaluate(formula, {x:x,y:y}))

const testChange = (event, value) =>{

  let tarifServetValue = "";
  for(let i=0;i<tarifs.length;i++){
    if(tarifs[i].tarifName === value){
      tarifServetValue = tarifs[i].tarifServerName
    }
  }

  axios.get(uriTables + tarifServetValue).then((resp) =>{
    setFormula(resp.data)
    setProfit(getResult(moneyValue, yearValue))
  })
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

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={tarifs.map((tarif)=>tarif.tarifName)}
        sx={{ width: 300 }}
        onInputChange={testChange}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />

      <TextField  id="filled-basic" label="Filled" variant="filled" onChange={handleChangeMoney} value={moneyValue}/> 

      <Typography id="non-linear-slider" gutterBottom>
        На срок: {valueLabelFormat(yearValue)}
      </Typography>
      <Slider
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

    <TextField  id="filled-basic" label="Filled" variant="filled" disabled value={profit}/> 
    </div>
  );
}

export default App;
