import axios from "axios";
import { useEffect, useState } from "react";
import { DEFAULT_URL } from "../../consts";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';import './PanelAdmin.css'
import TextFieldWrapper from "../../components/TextFieldWrapper/TextFieldWrapper";
import { TextField } from "@mui/material";


const PanelAdmin = ({login, password}) => {
    const ADMIN_URL = DEFAULT_URL + "/admin/getTariffs";

    useEffect(()=>{
      getTariffs()
    },[])

    const columns = 
    [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'russianName', headerName: 'Название', width: 130 },
      { field: 'formula', headerName: 'Формула', width: 130 }
    ]
    const [tariffs ,setTariffs] = useState([{ russianName: 'Snow', formula: 'Jon'},{ russianName: 'Lannister', formula: 'Cersei'}])

    //Получение данных тарифов
    const getTariffs = () => {
        axios.post(ADMIN_URL,{
            login:login,
            password:password
        }).then((resp) =>{
            console.log(resp)
        })
    }

    //Редактирование таблицы
    const editName = (newName, tariffIndex) => {
      let newTariffs = Object.assign([], tariffs);
      newTariffs[tariffIndex].russianName = newName;
      setTariffs(newTariffs)
    }
    const editFormula = (newFormula, tariffIndex) => {
      let newTariffs = Object.assign([], tariffs);
      newTariffs[tariffIndex].formula = newFormula;
      setTariffs(newTariffs)
    }


    return (
      <div className="PanelAdmin">
        <div className="PanelAdmin__container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Название</TableCell>
                <TableCell align="left">Формула</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tariffs.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField value={row.russianName} onChange={(event)=>{editName(event.target.value, index)}}></TextField>
                  </TableCell>

                  <TableCell align="left">
                    <TextField value={row.formula} onChange={(event)=>{editFormula(event.target.value, index)}}></TextField>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
    );
  }
  
  export default PanelAdmin;