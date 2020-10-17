import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Table from 'react-bootstrap/Table';
import TheadUsers from './TheadUsers';
import Logout from '../../common/components/LogoutAll'
import { MainDiv } from '../../LogAndReg/style';
import { getUsers, cleanUsers } from '../../../store/actions/users/users-actions';
import whatsapp from '../../../assets/icons/g_whatsapp.svg'
import call from '../../../assets/icons/g_call.svg'
import pencil from '../../../assets/icons/g_pencil.svg'
import trash from '../../../assets/icons/g_trash.svg'
import EditModal from '../../common/modals/EditModal'
import DeleteModal from '../../common/modals/DeleteModal'
const GetUsers = () => {
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const { error, users } = useSelector(state => state.usersReducer);

    const gU = () => {
        dispatch(getUsers())
    }

    useEffect(() => {
        gU()
        return () => {
            dispatch(cleanUsers());
        }
    }, [])

    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);

    const del = async (id) => {
        console.log(id);
        // dispatch(deleteGuest(id)).then(data => {
        //     if (!data.error) {

        //         gG()
        //         addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
        //     }
        //     else {
        //         addToast(<ToastMsg>{data.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
        //     }
        // })
    }

    let players;
    let count = 0;
    if (users) {
        players = users.map((item, index) => {
            count++;
            return <tr key={index}>
                <td>{count}</td>
                <td>{item.fname + ' ' + item.lname}</td>
                <td><a href={'https://api.whatsapp.com/send?phone=972' + item.phone}><img alt="whatsapp" width="20" src={whatsapp} /></a></td>
                <td><a href={"tel:" + item.phone}><img alt="telephone" width="20" src={call} /></a></td>
                <td>{item.attack}</td>
                <td>{item.defense}</td>
                <td>{item.laundry}</td>
                <td>{item.notes}</td>
                <td style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <EditModal data={item} gU={gU} button={<img alt="edit" src={pencil} width="22"/>} />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <DeleteModal del={del} id={item._id} button={<img alt="trash" src={trash} width="22"/>} />
                </td>
            </tr>
        })
    }
    return (
        <MainDiv id="start" className="animated fadeIn" style={{ height: "100%", minHeight: "100vh" }}>
            {/* <div style={{ display: "flex", flexDirection: "column", width: "100%" }}> */}
            <Table id='myTable' responsive style={{ width: "100%", margin: "2% auto", background: "white", color: "black" }}>
                <TheadUsers />
                <tbody>
                    {players}
                </tbody>
            </Table>
            <Logout />
            {/* </div> */}
        </MainDiv>)
}

export default GetUsers