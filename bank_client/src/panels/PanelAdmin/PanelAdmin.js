import axios from "axios";
import { useEffect } from "react";
import { DEFAULT_URL } from "../../consts";

const PanelAdmin = ({login, password}) => {
    const ADMIN_URL = DEFAULT_URL + "/admin/getTariffs";

    useEffect(()=>{
      getTariffs()
    },[])

    //Отправка
    const getTariffs = () => {
        axios.post(ADMIN_URL,{
            login:login,
            password:password
        }).then((resp) =>{
            console.log(resp)
        })
    }

    return (
      <div className="PanelAdmin">
        <div className="PanelAdmin__container">
        </div>
      </div>
    );
  }
  
  export default PanelAdmin;