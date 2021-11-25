import { Autocomplete, Button, Slider, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextFieldWrapper from "../../components/TextFieldWrapper/TextFieldWrapper";
import { DEFAULT_URL } from "../../consts";
import './PanelAuthorization.css'

const PanelAuthorization = ({title="", url=""}) => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isBtnSendDisabled, setIsBtnSendDisabled] = useState(false)
    const [hasMistake, setHasMistake] = useState(false)

    //Отправка
    const sendData = () => {
        axios.post(url,{
            login:login,
            password:password
        }).then((resp) =>{
            if(resp.data){
                setHasMistake(false)
            }else{
                setHasMistake(true)
                setIsBtnSendDisabled(false)
            }
            console.log(resp)
        })
    }

    const sendBtnClick = () => {
        sendData()
        setIsBtnSendDisabled(true)
    }
    return(
        <div className="PanelAuthorization">
            <p className="PanelAuthorization__title">{title}</p>
            {
                hasMistake &&
                <p className="PanelAuthorization__error">Логин или пароль неверны</p>
            }
            <TextFieldWrapper label="Логин" onChange={(event)=>{setLogin(event.target.value)}} value={login}></TextFieldWrapper>
            <TextFieldWrapper label="Пароль" onChange={(event)=>{setPassword(event.target.value)}} value={password}></TextFieldWrapper>

            <Button onClick={sendBtnClick} disabled={isBtnSendDisabled} style={{maxHeight:"56px"}}>Войти</Button>
        </div>
    )
}

export default PanelAuthorization