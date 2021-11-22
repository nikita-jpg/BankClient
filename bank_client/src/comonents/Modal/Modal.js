import axios from 'axios';
import React, { useState } from 'react';
import './modal.css'

const Modal = ({modal, setModal}) => {
    const makeRecordUri = "http://localhost:8080/booking/makeRecord?"
    const[inputName, setName] = useState("")
    const[inputSecondName, setSecondName] = useState("")
    const[inputTelNumber, setTelNumber] = useState("")
    const[timeStart, setTimeStart] = useState("")
    const[timeEnd, setTimeEnd] = useState("")


    const sendRecord = () => {
        console.log(modal.freeTime)
        axios({
            method: 'get',
            url: makeRecordUri,
            params: {
                deskNumber:modal.tableId,
                date: modal.date,
                timeStart: "14:00",
                timeEnd: "15:00",
                clientName: inputName,
                clientSecondName: inputSecondName,
                clientTelNumber: inputTelNumber,
            }
           })
    }

    return(
        <div className={modal.isOpen ? "modal__background modal_active" : "modal__background"} onClick={() => setModal({isOpen: false, freeTime: []})}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__input">
                    <p className="modal__input__p">Введите ваше имя</p>
                    <input className="modal__input__input" value={inputName} onChange={(event) => setName(event.target.value)}></input>
                </div>

                <div className="modal__input">
                    <p className="modal__input__p">Введите вашу фамилию</p>
                    <input className="modal__input__input" value={inputSecondName} onChange={(event) => setSecondName(event.target.value)}></input>
                </div>

                <div className="modal__input">
                    <p className="modal__input__p">Введите ваш номер телефона</p>
                    <input className="modal__input__input" value={inputTelNumber} onChange={(event) => setTelNumber(event.target.value)}></input>
                </div>

                <div>
                <p className="modal__input__p" style={{marginTop: '20px'}}>Выберете время</p>
                <div className="modal__time_array">
                    {modal.freeTime.map(time =>(
                        <p className="modal__time_array__p">{time}</p>
                    ))}
                </div>
                <div>
                    <div className="modal__input">
                        <p className="modal__input__p">Начало</p>
                        <input className="modal__input__input" value={timeStart} onChange={(event) => setTimeStart(event.target.value)}></input>
                    </div>
                    <div className="modal__input">
                        <p className="modal__input__p">Конец</p>
                        <input className="modal__input__input" value={timeEnd} onChange={(event) => setTimeEnd(event.target.value)}></input>
                    </div>
                </div>
                </div>

                <button className="modal__btn" onClick={sendRecord}>Отправить</button>
            </div>
        </div>
    )
}

export {Modal}