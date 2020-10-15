import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useToasts } from "react-toast-notifications";


import Logout from '../../common/components/LogoutAll'
import { Together, ToastMsg } from '../../common/Style';
import { MainDiv } from '../../LogAndReg/style';


const GetUsers = () => {

    return (
        <MainDiv id="start" className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

                <Logout />
            </div>
        </MainDiv>)
}

export default GetUsers