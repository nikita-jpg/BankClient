import { Autocomplete, Button, Slider, TextField, Typography } from "@mui/material";
import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { useEffect, useState } from "react";
import TextFieldWrapper from "../../components/TextFieldWrapper/TextFieldWrapper";
import { DEFAULT_URL } from "../../consts";
import PanelBlank from "../PanelBlank/PanelBlank";
import './PanelReg.css'

const PanelReg = ({}) => {
    const uriDefault = "https://d140-62-33-49-154.ngrok.io/"

    const [nameValue, setNameValue] = useState("")
    const [nameError, setNameError] = useState({error:false, helpertext:""})

    const [familiaValue, setFamiliaValue] = useState("")
    const [familiaError, setFamiliaError] = useState({error:false, helpertext:""})

    const [otchestvoValue, setOtchestvoValue] = useState("")
    const [otchestvoError, setOtchestvoError] = useState({error:false, helpertext:""})

    const [phoneValue, setPhoneValue] = useState("")
    const [phoneError, setPhoneError] = useState({error:false, helpertext:""})

    const [emailValue, setEmailValue] = useState("")
    const [emailError, setEmailError] = useState({error:false, helpertext:""})

    //Обработчики
    const checkFIOValue = (data) => {
        if(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(data) && data !==""){
            return true
        }else{
            return false
        }
    }

    const checkPhoneNumber = (data) => {
        if(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(data)){
            return true
        }else{
            return false
        }
    }

    const checkEmail = (data) => {
        if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(data)){
            return true
        }else{
            return false
        }
    }

    const checkAllData = () => {
        //Проверка имени
        if(checkFIOValue(nameValue)){
            setNameError({error:false, helpertext:""})
        }
        else{
            setNameError({
                error:true,
                helpertext:"Вы ввели неверный текст"
            })
            return false;
        }

        //Проверка фамилии
        if(checkFIOValue(familiaValue)){
            console.log(familiaValue)
            setFamiliaError({error:false, helpertext:""})
        }
        else{
            setFamiliaError({
                error:true,
                helpertext:"Вы ввели неверный текст"
            })
            return false;
        }

        //Проверка отчества
        if(checkFIOValue(otchestvoValue)){
            setOtchestvoError({error:false, helpertext:""})
        }
        else{
            setOtchestvoError({
                error:true,
                helpertext:"Вы ввели неверный текст"
            })
            return false;
        }

        //Проверка номера телефона
        if(checkPhoneNumber(phoneValue)){
            setPhoneError({error:false, helpertext:""})
        }
        else{
            setPhoneError({
                error:true,
                helpertext:"Вы ввели неверный номер телефона"
            })
            return false;
        }

        //Проверка email-а
        if(checkEmail(emailValue)){
            setEmailError({error:false, helpertext:""})
            return true;
        }
        else{
            setEmailError({
                error:true,
                helpertext:"Вы ввели неверный email"
            })
            return false;
        }
    }

    //Отправка
    const sendData = () => {
        axios.post(DEFAULT_URL,{
            name:nameValue,
            familia:familiaValue,
            otchestvo:otchestvoValue,
            phoneNumber:phoneValue,
            email:emailValue
        }).then((resp) =>{
            console.log(resp.data)
          })
    }

    const sendBtnClick = () => {
        if(checkAllData()){
            sendData()
        }
    }

    return(
        <div className="PanelReg">
            <div className="PanelReg__title">Закажите звонок</div>
            <div className="PanelReg_container">
                {/* ФИО */}
                <TextFieldWrapper label="Имя" onChange={(event)=>{setNameValue(event.target.value)}} value={nameValue} error={nameError.error} helperText={nameError.helpertext}/>
                <TextFieldWrapper label="Фамилия" onChange={(event)=>{setFamiliaValue(event.target.value)}} value={familiaValue} error={familiaError.error} helperText={familiaError.helpertext}/>
                <TextFieldWrapper label="Отчество" onChange={(event)=>{setOtchestvoValue(event.target.value)}} value={otchestvoValue} error={otchestvoError.error} helperText={otchestvoError.helpertext}/>

                {/* Телефон */}
                <TextFieldWrapper label="Номер телефона" onChange={(event)=>{setPhoneValue(event.target.value)}} value={phoneValue} error={phoneError.error} helperText={phoneError.helpertext}/>

                
                {/* Email */}
                <TextFieldWrapper label="E-mail" onChange={(event)=>{setEmailValue(event.target.value)}} value={emailValue} error={emailError.error} helperText={emailError.helpertext}/>

                <Button onClick={sendBtnClick}>Отпарвить заявку</Button>
            </div>
        </div>
    )
}

export default PanelReg