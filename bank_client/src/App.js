import React, { useState } from "react";
import './App.css';
import { About } from "./comonents/About/About";
import { Header } from './comonents/Header/Header';
import { Menu } from "./comonents/Menu/Menu";
import {TabContent} from './comonents/TabContent/TabContent';
import { Tables } from "./comonents/Tables/Tables";
import {Autocomplete, TextField} from '@mui/material/';
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function App() {
  const uriTables = "https://83b0-93-81-207-6.ngrok.io/test"

const tarifs = [
{ 
  tarifName:'Тариф 1', 
  tarifServerName:'Tarif1'
},
{ 
  tarifName:'Тариф 2', 
  tarifServerName:'Tarif2'
}
];
const testChange = (event, value) =>{

  let tarifServetValue = "";
  for(let i=0;i<tarifs.length;i++){
    if(tarifs[i].tarifName === value){
      tarifServetValue = tarifs[i].tarifServerName
    }
  }

  console.log(tarifServetValue)

  axios.get(uriTables).then((resp) =>{
    console.log(resp)
  })
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
    </div>
  );
}

export default App;
