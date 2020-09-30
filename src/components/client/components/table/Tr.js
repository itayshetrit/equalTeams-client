import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import EditModal from '../../../common/modals/EditModal'
import DeleteModal from '../../../common/modals/DeleteModal'
import whatsapp from '../../../../assets/pics/guests/whatsapp.svg'
import telephone from '../../../../assets/pics/guests/call.svg'
import save1 from '../../../../assets/pics/guests/save.svg'
import { setGuestTable } from '../../../../store/actions/guests/guest-actions'
const Tr = (props) => {
    const uuid = require('uuid');
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false)
    const [temp, setTemp] = useState()
    const { error } = useSelector(state => state.guestReducer);
    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);
    const save = (data) => {
        dispatch(setGuestTable({ id: data, table: parseInt(temp) })).then(data => {
            if (!data.error) {

                props.gG()
                setFlag(!flag)
            }
        })
    }
    let x = ''
    if (props.data.accept > 0 && props.data.table === '') {
        x = { background: "linear-gradient(to right,white, rgb(255, 174, 0)90%, white)" }
    }
    return (
        <tr key={uuid()}>
            <td style={{ width: "5%" }}>{props.key}</td>
            <td style={props.back} onClick={() => setFlag(!flag)} style={{ cursor: "pointer" }}>{props.data.name}</td>
            <td>

                <a href={'https://api.whatsapp.com/send?phone=972' + props.data.phone + '&text=שלום'}><img alt="whatsapp" width="20" src={whatsapp} /></a>
            </td>
            <td><a href={"tel:" + props.data.phone}><img alt="telephone" width="20" src={telephone} /></a></td>
            <td>{props.data.phone}</td>
            <td>{props.data.sum}</td>
            <td>{props.data.closeness}</td>
            <td style={props.back} style={{ width: "3%" }}>{props.data.accept}</td>
            <td style={x} style={{ width: "8%" }}>
                {flag ? <div>
                    <input placeholder={props.data.table} style={{ width: "50%", textAlign: "center", marginLeft: "5%" }}
                        onChange={(e) => setTemp(e.target.value)} />
                    <img alt="save" style={{ cursor: "pointer" }} src={save1} width="20" onClick={() => save(props.data._id)} />
                </div> : props.data.table}</td>
            <td>{props.data.arrived}</td>
            <td>{props.data.gift}</td>
            <td>{props.data.note}</td>
            <td style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <EditModal data={props.data} gG={props.gG}/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <DeleteModal del={props.del} id={props.data._id} />
            </td>
        </tr>
    );
}

export default Tr;