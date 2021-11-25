import PanelBlank from "../../panels/PanelBlank/PanelBlank";
import PanelSuccess from "../../panels/PanelSuccess/PanelSuccess";
import PanelCalculation from "../../panels/PanelСalculation/PanelCalculation";
import PanelReg from "../../panels/PanelReg/PanelReg";

import { useState } from 'react';
import './UserPage.css'


const UserPage = () => {

    const [isPanelSuccessVisible, setIsPanelSuccessVisible] = useState(false)
    return (
      <div className="UserPage">
        <div className="UserPage__container">
          {
            isPanelSuccessVisible ? 
            <PanelBlank>
              <PanelSuccess successMessage="Отправлено успешно"></PanelSuccess>
            </PanelBlank>
            :
            <PanelBlank>
              <PanelCalculation></PanelCalculation>
              <PanelReg openSuccessPanel={()=>setIsPanelSuccessVisible(true)}></PanelReg>
            </PanelBlank>
          }
        </div>
      </div>
    );
  }
  
  export default UserPage;