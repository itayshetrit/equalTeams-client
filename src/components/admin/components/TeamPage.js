import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

import TheadUsers from './TheadUsers';
import Routes from '../../routes/index'

import DeleteModal from '../../common/modals/DeleteModal';
import AddPlayerModal from '../../common/modals/AddPlayerModal';
import EditPlayerModal from '../../common/modals/EditPlayerModal';


import { getUsers, cleanUsers } from '../../../store/actions/users/users-actions';
import { deleteUserById } from '../../../store/actions/users/user-actions';

import { MainDiv } from '../../LogAndReg/style';

import { Title, Options, ToastMsg, WhiteError, Submit } from '../../common/Style';

import pencil from '../../../assets/icons/g_pencil.svg';
import trash from '../../../assets/icons/g_trash.svg';
import whatsapp from '../../../assets/icons/g_whatsapp.svg';
import call from '../../../assets/icons/g_call.svg';
const TeamPage = (props) => {
    const [addPlayer, setAddPlayer] = useState(false);
    const [playerToEdit, setPlayerToEdit] = useState(null);
    const [playerToDelete, setPlayerToDelete] = useState(null);
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const { error, users } = useSelector(state => state.usersReducer);
    const team = props.match.params.team.substring(5, props.match.params.team.length)

    const gU = () => {
        dispatch(getUsers(team))
    }

    useEffect(() => {
        gU()
        return () => {
            dispatch(cleanUsers());
        }
    }, [team])

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

    let players = "קבוצה ריקה, התחילו להוסיף";
    if (users.length) {
        let count = 0;
        players = users.map((item, index) => {
            count++;
            return <tr key={index}>
                {/* <td>{choise ? <input type="checkbox" className="checkbox animated fadeInRight" onClick={() => add_del(item)} /> : count}</td> */}
                <td>{count}</td>
                <td>{item.fname + ' ' + item.lname}</td>
                <td><a href={'https://api.whatsapp.com/send?phone=972' + item.phone}><img alt="whatsapp" width="20" src={whatsapp} /></a></td>
                <td><a href={"tel:" + item.phone}><img alt="telephone" width="20" src={call} /></a></td>
                <td>{item.attack}</td>
                <td>{item.defense}</td>
                {/* <td>{item.laundry}</td> */}
                <td style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <img alt="edit" src={pencil} width="22" onClick={() => setPlayerToEdit(item)} />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <img alt="edit" src={trash} width="22" onClick={() => setPlayerToDelete(item._id)} />
                </td>
            </tr>
        })
    }

    return (
        <MainDiv style={{ color: "white" }} className="animated fadeIn">
            <Title style={{ color: "white" }}>Equal Teams</Title>
            <div style={{ fontSize: "large" }}>{team}</div>
            <Options>
                <Link to={Routes.Admin.elections + team}>צור משחק</Link>
                <div onClick={() => setAddPlayer(!addPlayer)}>הוספת שחקן</div>
                <div>היסטורית משחק</div>
            </Options>
            <Table id='myTable' responsive style={{ width: "100%", margin: "2% auto", background: "white", color: "black" }}>
                <TheadUsers />
                <tbody>
                    {players}
                </tbody>
            </Table>
            {/* {playexrToEdit && <InfoModal onClose={setPlayerToEdit} data={playerToEdit} />} */}
            {playerToDelete &&
                <DeleteModal
                    func={del}
                    id={playerToDelete}
                    closeModal={setPlayerToDelete}
                    title="מחיקת שחקן"
                    msg="האם אתה בטוח?"
                />
            }
            {addPlayer &&
                <AddPlayerModal
                    closeModal={setAddPlayer}
                    team={team}
                    render={gU}
                />
            }
            {playerToEdit &&
                <EditPlayerModal
                    closeModal={setPlayerToEdit}
                    render={gU}
                    data={playerToEdit}
                />
            }

        </MainDiv>
    )
}

export default TeamPage;