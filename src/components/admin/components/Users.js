import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";

import '../../common/Style.css';
import { FlexRow, BorderBlur } from '../../common/Style'
import { getClients, cleanClients } from '../../../store/actions/clients/clients-actions'
const Users = (props) => {

    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const { error, clients } = useSelector(state => state.clientsReducer);

    useEffect(() => {
        dispatch(getClients())
        return () => {
            dispatch(cleanClients());
        }
    }, [])

    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);

    let list = "לא קיימים לקוחות";
    if (clients) {
        list = clients.map((item, index) => {
            let isClicked='';
            if (item._id===props.id ){
                isClicked='clicked';
            }
            return <BorderBlur className={isClicked} key={index} onClick={() => props.func(item._id)}>{item.name} </BorderBlur>
        })
    }

    return (<>
        <FlexRow>בחירת משתמש</FlexRow>
        <FlexRow style={{ width:"100%", marginTop:"20px" }}>{list}</FlexRow>
    </>)
}

export default Users