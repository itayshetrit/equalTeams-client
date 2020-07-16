import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import './myCss.css'
import Modal from 'react-bootstrap/Modal'
import { Products, HoldProducts } from './clientStyle'
import { FlexRow, ToastMsg, Together } from '../../common/Style'
import Switch from "react-switch";
import trash from '../../../assets/pics/auth/delete.svg'
import reset1 from '../../../assets/pics/auth/reset.svg'
import minus from '../../../assets/pics/auth/minus.svg'
import plus from '../../../assets/pics/auth/plus.svg'
import infinite from '../../../assets/spinners/infinite.svg'
import { editProductStatus } from '../../../store/actions/products/product-actions'
const Static = () => {
    const iconSize="18";
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    const upAndDown = async (status, name, act) => {
        let x = (static_list.filter(item => item.name === name))
        let index = static_list.indexOf(x[0])
        if ((static_list[index].amount) < 100 && (static_list[index].amount) > 0) {
            static_list[index].amount = static_list[index].amount + act;
            await edit()
        }
        else {
            addToast(<ToastMsg>כמות יכולה להיות בין 0-100</ToastMsg>, { appearance: "error", autoDismiss: true });
        }

    }

    const switchFlag = async (status, name) => {
        let x = (static_list.filter(item => item.name === name))
        let index = static_list.indexOf(x[0])
        static_list[index].status = !status;
        await edit()

    }

    const deleteProd = async (name) => {
        static_list = (static_list.filter(item => item.name !== name))
        await edit()

    }
    const edit = () => {
        dispatch(editProductStatus({ static_list })).then(data => {
            if (!data.error) {

                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    
    console.log("static")
    // setTimeout(function(){ checkForUpdates1(); }, 10000);
    const reset = () => {
        static_list.forEach(element => {
            element.status=false;
        });
        dispatch(editProductStatus({ static_list })).then(data => {
            if (!data.error) {

                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }

    let { static_list } = useSelector(state => state.authReducer.user);
    const { smallLoading } = useSelector(state => state.authReducer);
    let list = "רשימה ריקה"
    if (static_list.length > 0) {
        // static_list = static_list.sort(function (x, y) {
        //     return (x.status === y.status) ? 0 : x.status ? 1 : -1;
        // });
        list = static_list.map((item, index) => {
            return <Products key={index}>
                <div style={{ flex: "0.2" }}><img alt="trash" onClick={() => deleteProd(item.name)} src={trash} width={iconSize} /></div>
                <div style={{ flex: "1.8" }}>{item.name}</div>
                <FlexRow style={{ flex: "0.65", alignItems: "center" }}>
                    <div><img alt="plus" src={plus} width={iconSize} onClick={() => upAndDown(item.status, item.name, 1)} /></div>
                    <div>{item.amount}</div>
                    <div><img alt="minus" src={minus} width={iconSize} onClick={() => upAndDown(item.status, item.name, -1)} /></div>
                </FlexRow>
                <div style={{ flex: "0.2", alignItems: "center", display: "flex", justifyContent: "center", marginRight:"7px" }}>
                    <Switch handleDiameter={13} width={38} height={19} onColor={'#FFA500'} offColor={'#000000'} checked={item.status}
                        onChange={() => switchFlag(item.status, item.name)} /></div>
            </Products>
        })
    }

    return (<div className="animated fadeIn">
        <div style={{ fontSize: "1.2rem", marginTop:"15px" }}>רשימה קבועה</div>
        <HoldProducts>
            <Modal centered show={smallLoading} animation={true} style={{ border: 'none !important', backgroundColor: "none" }}>
                <Modal.Body style={{ textAlign: "center", color: "black", direction: "rtl" }}><img alt="infinite" src={infinite} width="100" /></Modal.Body>
            </Modal>
            {list}
        </HoldProducts>
        <Together onClick={() => reset()} style={{flexDirection:"row"}}>
            <img alt="reset1" src={reset1} width="30" />
            <div style={{ fontSize: "1rem" }}>reset</div>
        </Together>
        
    </div>)
}
export default Static;