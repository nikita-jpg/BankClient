import { Autocomplete, Slider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextFieldWrapper from "../../components/TextFieldWrapper/TextFieldWrapper";
import PanelBlank from "../PanelBlank/PanelBlank";
import './PanelReg.css'

const PanelReg = ({}) => {

    return(
        <div className="PanelReg">
            <div className="PanelReg__title">Закажите звонок</div>
            <div className="PanelReg_container">
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
            </div>
        </div>
    )
}

export default PanelReg