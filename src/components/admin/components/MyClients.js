import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import {Wellcome} from '../../common/Style'
import { getUsers1, cleanUsers, editUserByID1,deleteUserByID1 } from '../../../store/actions/users/users-actions'
import WhatsApp from '../../common/components/WhatsApp'
import Call from '../../common/components/Call'
import RemoveModal from '../../common/modals/RemoveModal'
import Switch from "react-switch";
import { ToastMsg } from '../../common/Style'
import infinite from '../../../assets/spinners/infinite.svg'
import trash_white from '../../../assets/icons/trash_white.svg'
const MyClients = () => {
    const [spinner, setSpinner] = useState(false)
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const { users, loading, flag } = useSelector(state => state.usersReducer);
    const switchFlag = (newFlag,id) => {
        setSpinner(true)
        dispatch(editUserByID1(newFlag,id)).then(data => {
            setSpinner(false)
            if(!data.error){
                
                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else{
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    const deleteUser = (id) => {
        dispatch(deleteUserByID1(id)).then(data => {
            if(!data.error){
                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else{
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    useEffect(() => {
        dispatch(getUsers1())
        return () => {
            dispatch(cleanUsers());
        }
    }, [flag])
    let list = "לא קיימים לקוחות";
    if (users) {
        list = users.map((item, index) => {
            return <div key={index} className="animated fadeIn" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div style={{ flex: "5", textAlign:"right", paddingRight:"12px" }}>{item.name}</div>
                <div style={{ flex: "1" }}><WhatsApp phone={item.phone} /></div>
                <div style={{ flex: "1" }}><Call phone={item.phone} /></div>
                <div style={{ flex: "1.5",alignItems: "center", display:"flex", justifyContent:"center"}}>
                    <Switch width={32} height={16} onColor={'#4D8CF4'} checkedIcon={false} uncheckedIcon={false} checked={item.flag}
                    onChange={() => switchFlag(!item.flag,item._id)} /></div>
                <div style={{ flex: "1" }}><RemoveModal button={<img src={trash_white} width="16" />} 
                msg={"האם אתה בטוח שברצונך למחוק משתמש זה?"} func={deleteUser} title={"מחיקה"} 
                id={item._id}/></div>
            </div>
        })
    }
        let view = <>
        <Wellcome>הלקוחות שלי</Wellcome>
            <div className="animated fadeInLeft" style={{ display: "flex", flexDirection: "column", marginTop:"2%" }}>
                {spinner? <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <img src={infinite} width="100" /></div>
                 :''}
                {list}
            </div>
        </>
    return (<div style={{minHeight:"100vh"}}>
        {view}
    </div>)
}
export default MyClients