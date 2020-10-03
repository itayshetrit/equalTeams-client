import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Table from 'react-bootstrap/Table'
import { MainDiv, Input } from '../../LogAndReg/style'
import { ClosenessSumTr, ClosenessTd, Options, ClosenessTr } from './table/style'
import { FlexRow, ToastMsg } from '../../common/Style'
import { getGuests, cleanGuests } from '../../../store/actions/guests/guests-actions'
import { setGuestTable } from '../../../store/actions/guests/guest-actions'
import Logout from '../../common/components/LogoutAll'
import Thead from './table/Thead';
import Tr from './table/Tr';
import EditModal from '../../common/modals/EditModal'
import saveIcon from '../../../assets/pics/guests/save2.svg'
let chooses = [];
const Main1 = () => {
    
    const [choise, setChoise] = useState(false)
    const [table, setTable] = useState('')
    const uuid = require('uuid');
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const { error, guests } = useSelector(state => state.guestsReducer);
    const gG = () => {
        dispatch(getGuests())
    }
    useEffect(() => {
        dispatch(getGuests())
        return () => {
            dispatch(cleanGuests());
        }
    }, [])
    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);
    const save = (id, table) => {
        dispatch(setGuestTable({ id, table })).then(data => {
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
            await save(item._id, table)
        })
        chooses = [];
        setChoise(!choise)

    }
    let clos = []
    let array = [];
    let count = 0;
    let all = 0;
    let not = 0;
    let closeness = '';
    const del = async (p) => {
        // await axios.delete(localStorage['username']+"/" + p + ".json").then(res => {
        //     del2(p)
        // })
        console.log("del: " + p)
    }
    const add_del = (item) => {
        let exist = chooses.filter(x => x._id === item._id)
        if (exist[0]) {
            chooses = chooses.filter(x => x._id !== item._id)
        }
        else {
            chooses.push(item)
        }
    }
    if (guests.length > 0) {
        // debugger;
        for (let i = 0; i < guests.length - 1; i++) {
            let back = "";
            console.log(guests[i].table)
            if (guests[i].closeness !== closeness && i !== 0) {
                array.push(<ClosenessSumTr key={i * 1000}>
                    <ClosenessTd colSpan="13">
                        {count}
                    </ClosenessTd>
                </ClosenessSumTr>);
                all += count;
                count = 0;
            }
            if (guests[i].closeness !== closeness) {
                closeness = guests[i].closeness
                clos.push(closeness)
                array.push(<ClosenessTr id={closeness} key={(i + 5) * 10000}>
                    <td colSpan="13">{guests[i].closeness}</td>
                </ClosenessTr>)
            }
            if (guests[i].accept > 0) {
                back = "back"
                count += guests[i].accept;
            }
            else if (guests[i].accept === 0) {
                not += 1;
            }
            if (choise) {
                array.push(<Tr save={save} gG={gG} back={back} del={del} key={i}
                    index={<input type="checkbox" className="checkbox animated fadeInRight" onClick={() => add_del(guests[i])} />} data={guests[i]} />)
            }
            else {
                array.push(<Tr save={save} gG={gG} back={back} del={del} key={i} index={i + 1} data={guests[i]} />)
            }
        }
        array.push(<ClosenessSumTr key={guests.length}>
            <ClosenessTd colSpan="13">{count}</ClosenessTd>
        </ClosenessSumTr>)
        all += count;


    }
    let choose = clos.map((item, index) => {
        return <a key={index} href={"#" + item}>{item}</a>
    })
    const search = (x, y) => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById(y);
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[x];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    const whatsapp1 = () => {
        
    }
    return (<MainDiv id="start" className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
        <button onClick={() => whatsapp1()}>whatsapp</button>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>


            <FlexRow style={{ marginBottom: "15px", marginTop: "15px", direction: "rtl", color: "white", alignItems: "center" }}>
                <div>שולחנות</div>
                <div>
                    <Input placeholder="חיפוש" id='user' onChange={() => search(1, "user")} />
                </div>
                <div style={{ cursor: "pointer" }} onClick={() => setChoise(!choise)}>בחירה מרובה</div>
                {choise ? <FlexRow style={{ width: "10%" }}><Input style={{ width: "100%" }} placeholder="שולחן" className="animated fadeInDown" type="number" min="0" max="50"
                    onChange={(e) => setTable(e.target.value)} /><div className="s animated fadeInDown" style={{ cursor: "pointer", marginRight: "8px" }}
                        onClick={() => apply()}><img src={saveIcon} width="25" /></div></FlexRow>
                    : <div style={{ opacity: "0", width: "11%" }}>הקהקרהר</div>}
                <div><EditModal act={"add"} button={"הוספה"} gG={gG} /></div>
            </FlexRow>
            <Options>{choose}</Options>
            <Table id='myTable' responsive style={{ width: "100%", margin: "2% auto", background: "white", color: "black" }}>
                <Thead />
                <tbody>
                    {array}
                </tbody>
            </Table>
            <Logout />
        </div>
    </MainDiv>)
}

export default Main1