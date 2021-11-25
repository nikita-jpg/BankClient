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
import PanelBlank from "./panels/PanelBlank/PanelBlank";
const { evaluate } = require('mathjs')
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const App = () => {

  const [isPanelReg, setIsPanelReg] = useState(false)
  const openRegPanel = () => setIsPanelReg(true)
  return (
    <div className="App">
      <div className="App__container">
        <PanelBlank>
          <PanelCalculation></PanelCalculation>
          <PanelReg></PanelReg>
        </PanelBlank>
      </div>
    </div>
  );
}

export default App;
