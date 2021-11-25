import React, { useEffect, useState } from "react";
import './App.css';
import {Autocomplete, TextField, Slider, Typography, Button } from '@mui/material/';
import axios from 'axios';
import AutocompleteWrapper from "./components/AutocompleteWrapper/AutocompleteWrapper";
import TextFieldWrapper from "./components/TextFieldWrapper/TextFieldWrapper";
import TypographyWrapper from "./components/TypographyWrapper/TypographyWrapper";
import SliderWrapper from "./components/SliderWrappe/SliderWrapper";
import PanelCalculation from "./panels/PanelСalculation/PanelCalculation";
import PanelReg from "./panels/PanelReg/PanelReg";
const { evaluate } = require('mathjs')
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const App = () => {

  const [isPanelReg, setIsPanelReg] = useState(false)
  return (
    <div className="App">
      <div className="App__container">
        <PanelCalculation></PanelCalculation>
        {/* <PanelReg></PanelReg> */}
      </div>
    </div>
  );
}

export default App;
