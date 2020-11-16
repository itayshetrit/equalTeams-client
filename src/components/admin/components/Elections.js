import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Table from 'react-bootstrap/Table';
import TheadUsers from './TheadUsers';
import { ToastMsg, Title, Options, RegularHover, FlexRow } from '../../common/Style'
import Logout from '../../common/components/LogoutAll'
import { MainDiv } from '../../LogAndReg/style';

import { getUsers, cleanUsers } from '../../../store/actions/users/users-actions';
import { elections, cleanElections } from '../../../store/actions/elections/elections-actions';
let chooses = [];
const Elections = (props) => {
    const team = props.match.params.team.substring(5, props.match.params.team.length);
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    // const { error, list } = useSelector(state => state.electionsReducer);
    const dispatch = useDispatch();
    // const { addToast } = useToasts();
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


    let players = "קבוצה ריקה, התחילו להוסיף";
    if (users.length) {
        for (let i of users) {
            chooses.push({ name: i.fname + " " + i.lname, choose: false })
        }
        players = chooses.map((item, index) => {
            return <div key={index} style={{ width: "33%" }}>{item.name}</div>
        })
    }

    // useEffect(() => {
    //     gU(props.match.params.team.substring(5,props.match.params.team.length))
    //     return () => {
    //         dispatch(cleanUsers());
    //     }
    // }, [props.match.params.team])


    // useEffect(() => {
    //     dispatch(elections({
    //         list: JSON.parse(localStorage['list']),
    //         numOfTeams: parseInt(localStorage['numOfTeams'])
    //     }))
    //     return () => {
    //         dispatch(cleanElections());
    //     }
    // }, [])

    // if(list){
    //     console.log(list);
    // }
    // console.log(localStorage['numOfTeams']);
    // console.log(JSON.parse(localStorage['list']));


    // if (list){
    //     console.log(list);
    // }
    // if (numOfTeams){
    //     console.log(numOfTeams);
    // }

    // if (users) {
    //     players = users.map((item, index) => {
    //         count++;
    //         return <tr key={index}>
    //             <td>{count}</td>
    //             <td>{item.fname + ' ' + item.lname}</td>
    //             <td><a href={'https://api.whatsapp.com/send?phone=972' + item.phone}><img alt="whatsapp" width="20" src={whatsapp} /></a></td>
    //             <td><a href={"tel:" + item.phone}><img alt="telephone" width="20" src={call} /></a></td>
    //             <td>{item.attack}</td>
    //             <td>{item.defense}</td>
    //             <td>{item.laundry}</td>
    //             <td style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
    //                 <EditModal data={item} gU={gU} button={<img alt="edit" src={pencil} width="22" />} />
    //                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                  <DeleteModal gU={gU} del={del} id={item._id} button={<img alt="trash" src={trash} width="22" />} />
    //             </td>
    //         </tr>
    //     })
    // }
    return (
        <MainDiv id="start" className="animated fadeIn" style={{ color: "white" }}>
            <div>תאריך</div>
            <div><input type="date" onChange={(e) => setDate(e.target.value)} /></div>
            <div>שעה</div>
            <div><input type="time" onChange={(e) => setTime(e.target.value)} /></div>

            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                {players}
            </div>

            {/* <Logout /> */}
        </MainDiv>)
}

export default Elections;