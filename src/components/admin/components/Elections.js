import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Table from 'react-bootstrap/Table';
import TheadUsers from './TheadUsers';
import { ToastMsg, Title, Options, RegularHover, FlexRow } from '../../common/Style'
import Logout from '../../common/components/LogoutAll'
import { MainDiv } from '../../LogAndReg/style';
import { elections, cleanElections } from '../../../store/actions/elections/elections-actions';

const GetUsers = (props) => {
    const { error, list } = useSelector(state => state.electionsReducer);
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    // useEffect(() => {
    //     gU(props.match.params.team.substring(5,props.match.params.team.length))
    //     return () => {
    //         dispatch(cleanUsers());
    //     }
    // }, [props.match.params.team])


    useEffect(() => {
        dispatch(elections({
            list: JSON.parse(localStorage['list']),
            numOfTeams: parseInt(localStorage['numOfTeams'])
        }))
        return () => {
            dispatch(cleanElections());
        }
    }, [])

    if(list){
        console.log(list);
    }
    // console.log(localStorage['numOfTeams']);
    // console.log(JSON.parse(localStorage['list']));


    // if (list){
    //     console.log(list);
    // }
    // if (numOfTeams){
    //     console.log(numOfTeams);
    // }
    let players;
    let count = 0;
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
        <MainDiv id="start" className="animated fadeIn">
            <Title style={{ textDecoration: "underline", color: "white", fontFamily: "Varela" }}>בחירות</Title>


            {/* <Table id='myTable' responsive style={{ width: "100%", margin: "2% auto", background: "white", color: "black" }}>
                <TheadUsers />
                <tbody>
                    {players}
                </tbody>
            </Table> */}
            <Logout />
        </MainDiv>)
}

export default GetUsers