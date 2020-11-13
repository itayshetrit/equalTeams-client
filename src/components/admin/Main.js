import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { useToasts } from "react-toast-notifications";

import Routes from '../routes/index';

import { Together, Title, Options, WhiteInput, WhiteError,Submit } from '../common/Style';
import { MainDiv } from './../LogAndReg/style';

import users from '../../assets/icons/g_users.svg';
import list from '../../assets/icons/g_list.svg';

import Logout from './../common/components/LogoutAll';

import { checkAuth } from '../../store/actions/auth/auth-actions'
import { addTeam } from '../../store/actions/manager/manager-actions';

const Main = () => {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm()
    const { user } = useSelector(state => state.authReducer);
    const [team, setTeam] = useState(user.teams[0]);
    const [showForm, setShowForm] = useState(false);
    let list;
    if (user) {
        list = user.teams.map((item, index) => {
            return <Link key={index} to={Routes.Admin.team_page+item}>{item}</Link>
        })
    }

    const onSubmit = async data => {
        dispatch(addTeam(data)).then(data => {
            if (data.error) {
                addToast(data.error.error, { appearance: "error", autoDismiss: true });
            }
            else {
                addToast("הפעולה הצליחה", { appearance: "success", autoDismiss: true, autoDismissTimeout: 2000 });
                dispatch(checkAuth());
            }
        })
    }

    return (<MainDiv style={{ color: "white" }} className="animated fadeIn">
        <Title style={{ color: "white" }}>Equal Teams</Title>

        <div style={{cursor:"pointer"}} onClick={() => setShowForm(!showForm)}>צור קבוצה חדשה</div>
        {showForm &&
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <WhiteInput placeholder="שם קבוצה" name="team" ref={register({ required: true, pattern: /^[ A-Za-z0-9א-ת]+$/i, minLength: 2, maxLength: 20 })} />
                <br/>
                {errors.team && errors.team.type === 'required' && <WhiteError>! שדה חובה !</WhiteError>}
                {errors.team && (errors.team.type === 'maxLength' || errors.team.type === 'minLength' ||
                    errors.team.type === 'pattern') && <WhiteError>! 2-20 אותיות, רווחים וספרות בלבד !</WhiteError>}
            <br/>
            <Submit type="submit">יצירה</Submit>
            </form>
        }
        <Options>{list}</Options>
        {/* <Together as={Link} to={Routes.Admin.add_user}>
            <img src={users} alt="users" width="45" />
            <div>הוספת משתמש</div>
        </Together>
        <Together as={Link} to={Routes.Admin.get_users}>
            <img src={list} alt="list" width="45" />
            <div>רשימת משתמשים</div>
        </Together> */}

        <Logout />
    </MainDiv>)
}

export default Main