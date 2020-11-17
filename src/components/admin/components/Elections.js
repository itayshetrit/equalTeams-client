import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { Title, Players, Details, NumOfTeamsHolder, Options, PlayersHolder } from '../../common/Style'
import { MainDiv } from '../../LogAndReg/style';
import plus from '../../../assets/pics/auth/plus.svg';
import minus from '../../../assets/pics/auth/minus.svg';
import { getUsersToElections, elections, cleanElections, updateList } from '../../../store/actions/elections/elections-actions';
import Rusults from './Results';

const Elections = (props) => {
    const team = props.match.params.team.substring(5, props.match.params.team.length);
    const [date, setDate] = useState(null)
    const [numOfTeams, setNumOfTeams] = useState(3)
    const [time, setTime] = useState()
    // const { error, list } = useSelector(state => state.electionsReducer);
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    // const { error, users } = useSelector(state => state.usersReducer);
    const { error, list } = useSelector(state => state.electionsReducer);
    const gU = () => {
        dispatch(getUsersToElections(team))
    }

    useEffect(() => {
        gU()
        return () => {
            dispatch(cleanElections());
        }
    }, [team])

    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true });
        }
    }, [error]);

    const go = () => {
        let newList = list.filter(x => x.choose === true);
        dispatch(elections({
            list: newList,
            numOfTeams
        }))
    }

    const setChoose = (id) => {
        let newList = [...list];
        for (let item of newList) {
            if (item._id === id) {
                item.choose = !item.choose;
                break; //Stop this loop, was found
            }
        }
        dispatch(updateList(newList))
    }


    let players = "קבוצה ריקה, התחילו להוסיף";
    let count = 0;
    if (list) {
        count = list.filter(x => x.choose === true);
        count = count.length;
        players = list.map((item, index) => {
            return <Players onClick={() => setChoose(item._id)} key={index} chosen={item.choose}>{item.name}</Players>
        })
    }

    return (
        <MainDiv id="start" className="animated fadeIn" style={{ justifyContent: "flex-start" }}>
            <Title style={{ color: "white", margin: "20px auto" }}>יצירת משחק</Title>
            <Details>
                <div>תאריך</div>
                <div><input type="date" onChange={(e) => setDate(e.target.value)} /></div>
                <div>שעה</div>
                <div><input type="time" onChange={(e) => setTime(e.target.value)} /></div>
                <div>מספר קבוצות</div>
                <NumOfTeamsHolder>
                    <div><img style={{ cursor: "pointer" }} onClick={() => {
                        if (numOfTeams + 1 < 6) {
                            setNumOfTeams(numOfTeams + 1)
                        }
                    }} alt="plus" src={plus} width="20" /></div>
                    <div style={{ fontSize: "1rem" }}>{numOfTeams}</div>
                    <div><img style={{ cursor: "pointer" }} onClick={() => {
                        if (numOfTeams - 1 > 1) {
                            setNumOfTeams(numOfTeams - 1)
                        }
                    }} alt="minus" src={minus} width="20" /></div>
                </NumOfTeamsHolder>
                <div>{count} נבחרו</div>
                <Options><div onClick={() => go()}>"בחירות"</div></Options>

            </Details>

            <PlayersHolder>
                {players}
            </PlayersHolder>
            <div>תאריך: {date && date.substring(8, 10) + "/" + date.substring(5, 7)}</div>
            <div>שעה: {time}</div>
            <Rusults />
            {/* <Logout /> */}
        </MainDiv>)
}

export default Elections;