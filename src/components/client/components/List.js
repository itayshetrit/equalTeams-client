import React, { useEffect, useMemo } from 'react'
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Table from 'react-bootstrap/Table'
import { MainDiv,Input } from '../../LogAndReg/style'
import { ClosenessSumTr, ClosenessTd } from './table/style'
import { FlexRow } from '../../common/Style'
import { getGuests, cleanGuests } from '../../../store/actions/guests/guests-actions'
import Logout from '../../common/components/LogoutAll'
import Thead from './table/Thead';
import Tr from './table/Tr';

const Main1 = () => {
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
    let clos = []
    let array = [];
    let count = 0;
    let all = 0;
    let not = 0;
    let closeness = '';
    let back = ""
    if (guests) {
        guests.map((item, index) => {
            if (item.accept > 0) {
                back = "green_td";
                count += item.accept;
            }
            else if (item.accept === 0) {
                not += 1;
            }
            if (item.closeness !== closeness) {
                array.push(<ClosenessSumTr key={uuid()}>
                    <ClosenessTd colSpan="13">
                        {count}
                    </ClosenessTd>
                </ClosenessSumTr>);
                all += count;
                count = 0;
                closeness = item.closeness
                clos.push(closeness)
                array.push(<tr id={closeness} key={uuid()}
                    style={{
                        background: "rgba(0, 0, 0, 0.85)",
                        fontSize: "larger", color: "white"
                    }}
                ><td colSpan="13">{item.closeness}</td></tr>)
            }
            array.push(<Tr back={{ background: "rgb(226, 199, 226)" }} data={item} gG={gG} />)
        })
        array.push(<ClosenessSumTr key={uuid()}>
            <ClosenessTd colSpan="13">
                {count}
            </ClosenessTd>
        </ClosenessSumTr>);
        all += count;
    }

    function myFunction(x, y) {
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
    return (<MainDiv className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>


            <FlexRow style={{ marginBottom: "15px", marginTop: "15px", direction: "rtl", color:"white", alignItems:"center" }}>
                <div>שולחנות</div>
                <div>
                   
                    <Input placeholder="חיפוש" id='user' onChange={() => myFunction(1, "user")}/>
                </div>
                <div>הוספה</div>
            </FlexRow>

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