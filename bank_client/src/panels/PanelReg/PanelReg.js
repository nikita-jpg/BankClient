import { Autocomplete, Slider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './PanelReg.css'

const PanelReg = ({disabled, value, min, step, max, onChange=()=>{}}) => {

    return(
        <div className="PanelReg">
            <div className="PanelReg__title">Анализ будущего вклада</div>
            <div className="PanelReg__container">
                <TextField></TextField>
            </div>
        </div>
    )
}

export default PanelReg