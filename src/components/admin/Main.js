import React from 'react'
import { Link } from "react-router-dom";
import Routes from '../routes/index'
import { Together } from '../common/Style'
import users from '../../assets/icons/users.svg'
const Main = () => {
    return (<div className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
        <Together as={Link} to={Routes.Admin.register}>
            <img src={users} alt="users" width="45" />
            <div>הוספת משתמש</div>
        </Together>
    </div>)
}

export default Main