import { useState } from "react";
import { DEFAULT_URL } from "../../consts";
import PanelAdmin from "../../panels/PanelAdmin/PanelAdmin";
import PanelAuthorization from "../../panels/PanelAuthorization/PanelAuthorization";
import PanelBlank from "../../panels/PanelBlank/PanelBlank";
import './AdminPage.css'

const AdminPage = () => {
    const ADMIN_URL = DEFAULT_URL + "/admin";
    const [isAdminPanel, setIsAdminPanel] = useState(false)

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
      <div className="AdminPage">
        <div className="AdminPage__container">
            <PanelBlank>
              {
                isAdminPanel ? 
                <PanelAdmin login={login} password={password}></PanelAdmin>
                :
                <PanelAuthorization 
                  title="Введите логин и пароль администратора" 
                  url={ADMIN_URL} 
                  login={login}
                  password={password}
                  setLogin={setLogin}
                  setPassword={setPassword}
                  openNextPanel={()=>setIsAdminPanel(true)}></PanelAuthorization>
              }
            </PanelBlank>
        </div>
      </div>
    );
  }
  
  export default AdminPage;