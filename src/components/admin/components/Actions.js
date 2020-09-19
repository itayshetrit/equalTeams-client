import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useToasts } from "react-toast-notifications";

import list from './files/list.json'
import tables1 from './files/tables.json'
import Routes from '../../routes/index';
import Users from './Users';

import { Together, ToastMsg } from '../../common/Style';
import { MainDiv } from '../../LogAndReg/style';

import tables from '../../../assets/icons/tables.svg';
import guests from '../../../assets/icons/guests.svg';

import { addClient } from '../../../store/actions/clients/client-actions'

const Main1 = () => {
    const [choose, setChoose] = useState('');
    const { addToast } = useToasts();
    // const { error } = useSelector(state => state.clientReducer);
    const dispatch = useDispatch();
    const loadGuests = async () => {
        list.map((item, index) => {
            dispatch(addClient({
                uid: choose, phone: (item.טלפון).toString(), name: item.שם, sum: item.כמות, closeness: item.קירבה
            })).then(res => {
                if (res.error) {
                    addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
                }
            })
        })
    }
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh", alignItems: "center" }}>
        <div style={{ color: "white", position: "absolute", top: "0", margin: "40px auto", width: "100%", justifyContent: "space-evenly" }}>
            <Users id={choose} func={setChoose} />
        </div>
        {/* <FlexRow style={{ color: "white", position: "absolute", top: "0", margin: "40px auto" }}>בחירת משתמש</FlexRow> */}
        {/* <FlexRow style={{ color: "white", position: "absolute", top: "0", margin: "20px auto", width:"100%"  }}><Users /></FlexRow> */}

        {/* <HoldMain> */}
        {/* <Main className="animated fadeIn slow"> */}
        <Together onClick={() => loadGuests()}>
            <img src={guests} alt="guests" width="45" />
            <div>טעינת מוזמנים</div>
        </Together>
        <Together as={Link} to={Routes.Admin.register}>
            <img src={tables} alt="tables" width="45" />
            <div>טעינת שולחנות</div>
        </Together>
        {/* </Main> */}
        {/* </HoldMain> */}
    </MainDiv>)
}

export default Main1