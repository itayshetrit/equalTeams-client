import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { MainDiv } from '../../LogAndReg/style'
import { getTables, cleanTables } from '../../../store/actions/tables/tables-actions'
import { getTablesGuests, cleanGuests } from '../../../store/actions/guests/guests-actions'
import Logout from '../../common/components/LogoutAll'
import Table2 from './Table2'
const Main1 = () => {
    const { error, guests } = useSelector(state => state.guestsReducer);
    const { tables } = useSelector(state => state.tablesReducer);

    const [select, setSelect] = useState(false)
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    let chooses = [];

    useEffect(() => {
        dispatch(getTables())
        return () => {
            dispatch(cleanTables());
        }
    }, [])

    useEffect(() => {
        dispatch(getTablesGuests())
        return () => {
            dispatch(cleanGuests());
        }
    }, [])

    const add_del = (item) => {
        let exist = chooses.filter(x => x.id === item.id)
        if (exist[0]) {
            chooses = chooses.filter(x => x.id !== item.id)
        }
        else {
            chooses.push(item)
        }
        console.log(chooses);
    }

    let array = [];
    let tables2 = []
    let count = 0;
    let table = '';
    if (guests.length > 0) {


        for (let i = 0; i < guests.length; i++) {
            console.log(guests[i].table)
            if (guests[i].accept > 0 && guests[i].table !== null) {//dont show
                if (guests[i].table !== table) {
                    if (array.length > 0) {
                        tables2.push(<Table2 add_del={add_del} select={select} key={i} array={array} />)
                    }

                    count = 0;
                    table = guests[i].table
                    array = [];
                }
                array.push(guests[i])
                count += parseInt(guests[i].accept, 10)
            }
        }
        tables2.push(<Table2 add_del={add_del} select={select} key={guests.length} array={array} />)

    }
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {tables2}
        </div>
        <Logout />
    </MainDiv>)
}

export default Main1