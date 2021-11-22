import '../Tables/tables.css';
import '../Tables/tables__content.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Table } from './Table/Table'
import { Modal } from '../Modal/Modal'
import { format } from "date-fns";
import axios from 'axios';



const Tables = () =>{
    const uriTables = "http://localhost:8080/booking/getRecord?date="

    const [date, onChange] = useState(new Date())
    const [tables, setAppState] = useState([])
    const [modal, setModal] = useState({isOpen: false, tableId: 0, freeTime: [], date: ""})

    const onDateChange = date => {
        onChange(date)

        if(date!=null){
            axios.get(uriTables + format(date,"yyyy.MM.dd")).then((resp) =>{
                const allTables = resp.data;
                setAppState(allTables)
            })
        }
    }


    return(
    <div className="tables">
        <Modal modal={modal} setModal={setModal}></Modal>
        <DatePicker
            onChange={onDateChange}
            value={date}
            format={"yyyy.MM.dd"}/>
        <div className="tables__content">
            {tables.map(table => (
                <Table number={table.tableId} date={format(date,"yyyy.MM.dd")} freeTime = {table.freeTime} setModal={setModal}></Table>
            ))}
        </div>
    </div>
    )
}


export {Tables}