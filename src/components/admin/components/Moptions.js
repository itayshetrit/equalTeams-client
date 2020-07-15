// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useToasts } from "react-toast-notifications";
// import { ToastMsg } from '../../common/Style'
// import { getTurns1, cleanTurns, deleteTurnByID1 } from '../../../store/actions/products/turns-actions'
// import Open from './Open'
// import cancel_white from '../../../assets/icons/cancel_white.svg'
// import RemoveModal from '../../common/modals/RemoveModal'
// import { Mops, Mop } from './adminStyle'
// import WhatsApp from '../../common/components/WhatsApp'
// import infinite from '../../../assets/spinners/infinite.svg'
// const Options = (props) => {
//     const { addToast } = useToasts();
//     const dispatch = useDispatch();
//     const { turns, loading, flag } = useSelector(state => state.turnsReducer);
//     useEffect(() => {
//         dispatch(getTurns1(props.date))

//         return () => {
//             dispatch(cleanTurns());
//         }
//     }, [props.date])
//     useEffect(() => {
//         dispatch(getTurns1(props.date))
//     }, [flag])
//     const deleteTurn = async (id) => {
//         dispatch(deleteTurnByID1(id)).then(data => {
//             if(!data.error){    
//                 addToast(<ToastMsg>התור נמחק בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
//             }
//             else{
//                 addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
//             }
//         })

//     }
//     let list = "אין תורים ליום זה"
//     if (turns.length > 0) {
//         list = turns.map((item, index) => {
//             return <Mop key={index} className="animated fadeIn">
//                 <div style={{ flex: "2" }}>{item.time}</div>
//                 <div style={{ flex: "4" }}>{item.name}</div>
//                 <div style={{ flex: "1" }}><RemoveModal msg={"?האם אתה בטוח שברצונך למחוק תור זה"} 
//                 func={deleteTurn} id={item._id} title={"מחיקה"} button={<img width="16" alt="whatsapp" src={cancel_white} style={{cursor:"pointer"}} />} /></div>
//                 <div style={{ flex: "1" }}><WhatsApp phone={item.phone} /></div>
//             </Mop>
//         })
//     }
//     let view = <><img className="animated fadeIn" src={infinite} width="100" /></>
//     if (!loading) {
//         view = <>
//             <Mops className="animated fadeIn">
//                 {list}
//             </Mops>
//             <Open date={props.date} />
//         </>
//     }
//     return (
//         <>
//             {view}
//         </>
//     )
// }

// export default Options