import React from 'react'
import { Link } from "react-router-dom";
import Routes from '../routes/index'
import { Together } from '../common/Style'
import { MainDiv, HoldMain, Main } from './../LogAndReg/style'
import users from '../../assets/icons/users.svg'
const Main1 = () => {
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh", alignItems:"center" }}>
        {/* <HoldMain> */}
            {/* <Main className="animated fadeIn slow"> */}
                <Together as={Link} to={Routes.Admin.register}>
                    <img src={users} alt="users" width="45" />
                    <div>הוספת משתמש</div>
                </Together>
                <Together as={Link} to={Routes.Admin.actions}>
                    <img src={users} alt="users" width="45" />
                    <div>פעולות נוספות</div>
                </Together>
            {/* </Main> */}
        {/* </HoldMain> */}
    </MainDiv>)
}

export default Main1