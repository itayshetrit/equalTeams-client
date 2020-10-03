import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { MainDiv } from '../../LogAndReg/style'
import { getTablesGuests, cleanGuests } from '../../../store/actions/guests/guests-actions'
import Logout from '../../common/components/LogoutAll'
const Main1 = () => {
    const { error, guests } = useSelector(state => state.guestsReducer);


    const dispatch = useDispatch();
    const { addToast } = useToasts();


    useEffect(() => {
        dispatch(getTablesGuests())
        return () => {
            dispatch(cleanGuests());
        }
    }, [])
    if (guests.length > 0) {


        let array = [];
        let tables = []
        let count = 0;
        let table = '';
        for (let i = 0; i < guests.length; i++) {
            if (guests[i].accept > 0 && guests[i].table !== null) {//dont show
                if (guests[i].table !== table) {
                    if (array.length > 0) {
                        tables.push(<Table2 add_del={add_del} select={select} key={i} array={array} />)
                    }

                    count = 0;
                    table = guests[i].table
                    array = [];
                }
                array.push(guests[i])
                count += parseInt(y[i].accept, 10)
            }
        }
        tables.push(<Table2 add_del={add_del} select={select} key={guests.length} array={array} />)

    }
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>

        <Logout />
    </MainDiv>)
}

export default Main1