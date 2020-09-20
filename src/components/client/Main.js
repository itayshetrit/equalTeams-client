import React from 'react'
import { Link } from "react-router-dom";
import Routes from '../routes/index'
import { Together } from '../common/Style'
import { MainDiv, HoldMain, Main } from './../LogAndReg/style'
import tables from '../../assets/icons/tables.svg';
import guests from '../../assets/icons/guests.svg';
import Logout from './../common/components/LogoutAll'
const Main1 = () => {
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh", alignItems:"center" }}>
        {/* <HoldMain> */}
            {/* <Main className="animated fadeIn slow"> */}
                <Together as={Link} to={Routes.Client.list}>
                    <img src={guests} alt="guests" width="45" />
                    <div>רשימת אורחים</div>
                </Together>
                <Together as={Link} to={Routes.Client.tables}>
                    <img src={tables} alt="tables" width="45" />
                    <div>מערך שולחנות</div>
                </Together>
            {/* </Main> */}
        {/* </HoldMain> */}
<Logout />
    </MainDiv>)
}

export default Main1