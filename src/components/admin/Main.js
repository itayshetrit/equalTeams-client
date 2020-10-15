import React from 'react'
import { Link } from "react-router-dom";
import Routes from '../routes/index'
import { Together, Title } from '../common/Style'
import { MainDiv} from './../LogAndReg/style'
import users from '../../assets/icons/g_users.svg'
import list from '../../assets/icons/g_list.svg'
import Logout from './../common/components/LogoutAll'
const Main1 = () => {
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh", alignItems:"center",
    justifyContent:"space-evenly", flexDirection:"column" }}>
        <Title style={{ textDecoration: "underline", color:"white" }}>Gal Vaizman</Title>
        {/* <HoldMain> */}
            {/* <Main className="animated fadeIn slow"> */}
                <Together as={Link} to={Routes.Admin.add_user}>
                    <img src={users} alt="users" width="45" />
                    <div>הוספת משתמש</div>
                </Together>
                <Together as={Link} to={Routes.Admin.get_users}>
                    <img src={list} alt="list" width="45" />
                    <div>רשימת משתמשים</div>
                </Together>
            {/* </Main> */}
        {/* </HoldMain> */}
<Logout />
    </MainDiv>)
}

export default Main1