// import React,{useState} from 'react'
// import { useDispatch } from "react-redux";
// import { useToasts } from "react-toast-notifications";
// import RemoveModal from '../../common/modals/RemoveModal'
// import {addTurns1,deleteDay1} from '../../../store/actions/products/turns-actions'
// import { Input } from './adminStyle'
// import delete_day_white from '../../../assets/icons/delete_day_white.svg'
// import waiting_white from '../../../assets/icons/waiting_white.svg'
// import { FlexRow2,ToastMsg } from '../../common/Style'
// const success = <div style={{color:"black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px"}}>הפעולה התבצעה בהצלחה</div>
// const error = <div style={{color:"black", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"16px"}}>הפעולה נכשלה</div>
// const Open = (props) => {
//     const { addToast } = useToasts();
//     const [start, setStart] = useState('10:00')
//   const [end, setEnd] = useState('20:00')
//   const [time, setTime] = useState(15)
//     const dispatch = useDispatch();

//     const deleteDay = async () => {
//         dispatch(deleteDay1(props.date))
//     }

//     const open = async () => {
//         dispatch(addTurns1({start,end,time,date:props.date}))
//         .then(res => {
//             if(!res.error){    
//                 addToast(<ToastMsg>התורים התווספו בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
//             }
//             else{
//                 addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
//             }
//         })
//         .catch(err => console.log(err))
//     }
//     return (<div style={{ marginTop: "20%",paddingBottom:"10%" }} className="animated fadeIn">
//         <FlexRow2 style={{ margin: "10%" }}>
//             <div><p>התחלה</p>
//                 <Input defaultValue={start} type="time" onChange={(e) => setStart(e.target.value)} /></div>
//             <div><p>סיום</p>
//                 <Input defaultValue={end} type="time" onChange={(e) => setEnd(e.target.value)} /></div>
//             <div><p>דקות</p>
//                 <Input value={time} type="number" onChange={(e) => alert("אין באפשרותך לשנות - פנה למנהל המערכת")} /></div>
//         </FlexRow2>
//         <RemoveModal button={<button className="button" style={{marginBottom:"5%"}}><img src={waiting_white} width="32" />פתח תורים</button>} msg={"האם אתה בטוח שברצונך לבצע פעולה זו?"} func={open} title={"פתיחת תורים"} id={"null"}/>
//         <RemoveModal button={<button className="button"><img src={delete_day_white} width="32" />מחק יום זה</button>} msg={"האם אתה בטוח שברצונך למחוק את כל התורים ליום זה?"} func={deleteDay} title={"מחיקה"} id={"null"}/>

//     </div>)
// }
// export default Open