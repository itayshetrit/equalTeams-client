import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { ToastMsg, FlexRow } from '../../common/Style'
import { MainDiv, Input } from '../../LogAndReg/style'
import { getTables, cleanTables } from '../../../store/actions/tables/tables-actions'
import { getTablesGuests, cleanGuests } from '../../../store/actions/guests/guests-actions'
import { setGuestTable } from '../../../store/actions/guests/guest-actions'
import Logout from '../../common/components/LogoutAll'
import saveIcon from '../../../assets/pics/guests/save2.svg'
import Table2 from './Table2'
let chooses = [];
const Main1 = () => {
    const { error, guests } = useSelector(state => state.guestsReducer);
    const { tables } = useSelector(state => state.tablesReducer);
    const [table, setTable] = useState()
    const [choise, setChoise] = useState(false)
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const gG = () => {
        dispatch(getTablesGuests())
    }
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
    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);
    const add_del = (item) => {
        let exist = chooses.filter(x => x._id === item._id)
        if (exist[0]) {
            chooses = chooses.filter(x => x._id !== item._id)
        }
        else {
            chooses.push(item)
        }
    }
    const save = async (id, table) => {
        await dispatch(setGuestTable({ id, table })).then(data => {
            if (!data.error) {

                gG()
                addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>{data.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    const apply = async () => {
        chooses.map(async (item, index) => {
            await save(item._id, parseInt(table))
        })
        chooses = [];
        setChoise(!choise)
    }
    let array = [];
    let tables2 = []
    let tempTable = '';
    if (guests.length > 0) {
        // let count = 0;


        for (let i = 0; i < guests.length; i++) {

            if (guests[i].accept > 0 && guests[i].table !== null) {//dont show
                if (guests[i].table !== tempTable) {
                    if (array.length > 0) {
                        tables2.push(<Table2 add_del={add_del} save={save} gG={gG} choise={choise} key={i} array={array} />)
                    }

                    // count = 0;
                    tempTable = guests[i].table
                    array = [];
                }
                array.push(guests[i])
                // count += parseInt(guests[i].accept, 10)
            }
        }
        tables2.push(<Table2 add_del={add_del} save={save} gG={gG} choise={choise} key={guests.length} array={array} />)

    }
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <FlexRow style={{ marginBottom: "15px", marginTop: "15px", direction: "rtl", color: "white", alignItems: "center" }}>
                <div style={{ cursor: "pointer" }} onClick={() => setChoise(!choise)}>בחירה מרובה</div>
                {choise ? <FlexRow style={{ width: "20%" }}><Input style={{ width: "100%" }} placeholder="שולחן" className="animated fadeInDown" type="number" min="0" max="50"
                    onChange={(e) => setTable(e.target.value)} /><div className="s animated fadeInDown" style={{ cursor: "pointer", marginRight: "8px" }}
                        onClick={() => apply()}><img alt="saveIcon" src={saveIcon} width="25" /></div></FlexRow>
                    : <div style={{ opacity: "0", width: "11%" }}>הקהקרהר</div>}
            </FlexRow>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {tables2}
            </div>
            <Logout />
        </div>
    </MainDiv>)
}

export default Main1