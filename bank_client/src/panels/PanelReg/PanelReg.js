import { Autocomplete, Button, Slider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextFieldWrapper from "../../components/TextFieldWrapper/TextFieldWrapper";
import PanelBlank from "../PanelBlank/PanelBlank";
import './PanelReg.css'

const PanelReg = ({}) => {

    const [nameValue, setNameValue] = useState("")
    const [familiaValue, setFamiliaValue] = useState("")
    const [otchestvoValue, setOtchestvoValue] = useState("")

    //Обработчики
    const checkFIOValue = (event) => {
        const data = event.target.value;
        return true
    }


    return(
        <div className="PanelReg">
            <div className="PanelReg__title">Закажите звонок</div>
            <div className="PanelReg_container">
                {/* ФИО */}
                <TextFieldWrapper onChange={(event)=>{if(checkFIOValue(event)){setNameValue(event.target.value)}}} value={nameValue} label="Имя"/>
                <TextFieldWrapper onChange={(event)=>{if(checkFIOValue(event)){setFamiliaValue(event.target.value)}}} value={familiaValue} label="Фамилия"/>
                <TextFieldWrapper onChange={(event)=>{if(checkFIOValue(event)){setOtchestvoValue(event.target.value)}}} value={otchestvoValue} label="Отчество"/>

                {/* Телефон */}
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
                <TextFieldWrapper label="Введите сумму вклада"/>
                <Button>Отпарвить заявку</Button>
            </div>
        </div>
    )
}

export default PanelReg