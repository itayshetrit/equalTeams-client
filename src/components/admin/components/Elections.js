import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Team from './Team';
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

    let players;
    let count = 0;
    if (list) {
        players = list.map((item, index) => {
            count++;
            return <Team key={index} data={item[0]} count={count} /> 
        })
    }
    return (
        <MainDiv id="start" className="animated fadeIn">
            <Title style={{ textDecoration: "underline", color: "white", fontFamily: "Varela" }}>בחירות</Title>
            <div style={{width:"50%",height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                {players}
            </div>

            
            <Logout />
        </MainDiv>)
}

export default GetUsers