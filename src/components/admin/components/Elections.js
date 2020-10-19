import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Table from 'react-bootstrap/Table';
import TheadUsers from './TheadUsers';
import { ToastMsg, Title, Options, RegularHover, FlexRow } from '../../common/Style'
import Logout from '../../common/components/LogoutAll'
import { MainDiv } from '../../LogAndReg/style';
import { getUsers, cleanUsers } from '../../../store/actions/users/users-actions';
import { deleteUserById } from '../../../store/actions/users/user-actions';
import whatsapp from '../../../assets/icons/g_whatsapp.svg'
import call from '../../../assets/icons/g_call.svg'
import pencil from '../../../assets/icons/g_pencil.svg'
import trash from '../../../assets/icons/g_trash.svg'
import EditModal from '../../common/modals/EditModal'
import DeleteModal from '../../common/modals/DeleteModal'
import plus from '../../../assets/pics/auth/plus.svg';
import minus from '../../../assets/pics/auth/minus.svg';
const GetUsers = () => {
    const [numOfTeams, setNumOfTeams] = useState(3)
    const { user } = useSelector(state => state.authReducer);
    const [team, setTeam] = useState(user.teams[0]);
    let list = user.teams.map((item, index) => {
        return <div key={index} onClick={() => setTeam(item)}>{item}</div>
    })
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const { error, users } = useSelector(state => state.usersReducer);

    const gU = () => {
        dispatch(getUsers(team))
    }

    useEffect(() => {
        gU()
        return () => {
            dispatch(cleanUsers());
        }
    }, [team])

    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);

    const del = async (id) => {
        dispatch(deleteUserById(id)).then(data => {
            if (!data.error) {
                gU()
                addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>{data.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
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
                <td style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <EditModal data={item} gU={gU} button={<img alt="edit" src={pencil} width="22" />} />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <DeleteModal gU={gU} del={del} id={item._id} button={<img alt="trash" src={trash} width="22" />} />
                </td>
            </tr>
        })
    }
    return (
        <MainDiv id="start" className="animated fadeIn">
            <Title style={{ textDecoration: "underline", color: "white", fontFamily: "Varela" }}>בחירות</Title>
            <Options>{list}</Options>
            <FlexRow style={{ width: "100%", alignItems: "center" }}>
                {/* <FlexRow style={{ color: "white" }}> */}
                    <div style={{ display: "flex", flexDirection: "column", width: "30%", justifyContent: "center", color:"white" }}>
                        <div style={{ textAlign: "center" }}>קבוצות</div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width:"100%" }}>
                            <div><img style={{ cursor: "pointer" }} onClick={() => {
                                if (numOfTeams + 1 < 11) {
                                    setNumOfTeams(numOfTeams + 1)
                                }
                            }} alt="plus" src={plus} width="20" /></div>
                            <div style={{ fontSize: "1rem" }}>{numOfTeams}</div>
                            <div><img style={{ cursor: "pointer" }} onClick={() => {
                                if (numOfTeams - 1 > -1) {
                                    setNumOfTeams(numOfTeams - 1)
                                }
                            }} alt="minus" src={minus} width="20" /></div>
                        </div>
                    </div>


                {/* </FlexRow> */}
                <RegularHover>
                    "בחירות"
            </RegularHover>
            </FlexRow>

            <Table id='myTable' responsive style={{ width: "100%", margin: "2% auto", background: "white", color: "black" }}>
                <TheadUsers />
                <tbody>
                    {players}
                </tbody>
            </Table>
            <Logout />
        </MainDiv>)
}

export default GetUsers