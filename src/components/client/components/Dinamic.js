import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import './myCss.css'
import Modal from 'react-bootstrap/Modal'
import { Products, HoldProducts } from './clientStyle'
import { FlexRow, ToastMsg } from '../../common/Style'
import Switch from "react-switch";
import reset1 from '../../../assets/pics/auth/reset1.svg'
import trash from '../../../assets/pics/auth/delete.svg'
import minus from '../../../assets/pics/auth/minus.svg'
import plus from '../../../assets/pics/auth/plus.svg'
import infinite from '../../../assets/spinners/infinite.svg'
import { editProductStatus } from '../../../store/actions/products/product-actions'
const Dinamic = () => {
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    const upAndDown = async (status, name, act) => {
        let x = (dinamic_list.filter(item => item.name === name))
        let index = dinamic_list.indexOf(x[0])
        if ((dinamic_list[index].amount) < 100 && (dinamic_list[index].amount) > 0) {
            dinamic_list[index].amount = dinamic_list[index].amount + act;
            await edit()
        }
        else {
            addToast(<ToastMsg>כמות יכולה להיות בין 0-100</ToastMsg>, { appearance: "error", autoDismiss: true });
        }
    }

    const switchFlag = async (status, name) => {
        let x = (dinamic_list.filter(item => item.name === name))
        let index = dinamic_list.indexOf(x[0])
        dinamic_list[index].status = !status;
        await edit()

    }

    const deleteProd = async (name) => {
        dinamic_list = (dinamic_list.filter(item => item.name !== name))
        await edit()

    }
    const edit = () => {
        dispatch(editProductStatus({ dinamic_list })).then(data => {
            if (!data.error) {

                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    const reset = () => {
        dinamic_list.forEach(element => {
            element.status=false;
        });
        dispatch(editProductStatus({ dinamic_list })).then(data => {
            if (!data.error) {

                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }

    let { dinamic_list } = useSelector(state => state.authReducer.user);
    const { smallLoading } = useSelector(state => state.authReducer);
    let list = "רשימה ריקה"
    if (dinamic_list.length > 0) {
        list = dinamic_list.map((item, index) => {
            return <Products key={index}>
                <div style={{ flex: "0.3" }}><img onClick={() => deleteProd(item.name)} alt="trash" src={trash} width="15" /></div>
                <div style={{ flex: "1" }}>{item.name}</div>
                <FlexRow style={{ flex: "0.7", alignItems: "center" }}>
                    <div><img alt="plus" src={plus} width="15" onClick={() => upAndDown(item.status, item.name, 1)} /></div>
                    <div>{item.amount}</div>
                    <div><img alt="minus" src={minus} width="15" onClick={() => upAndDown(item.status, item.name, -1)} /></div>
                </FlexRow>
                <div style={{ flex: "0.7", alignItems: "center", display: "flex", justifyContent: "center" }}>
                    <Switch handleDiameter={10} width={32} height={16} onColor={'#FFA500'} offColor={'#000000'} checked={item.status}
                        onChange={() => switchFlag(item.status, item.name)} /></div>
            </Products>
        })
    }
    return (<div className="animated fadeIn">
        <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" }}>משתנה</div><HoldProducts>
            <Modal centered show={smallLoading} animation={true} style={{ border: 'none !important', backgroundColor: "none" }}>
                <Modal.Body style={{ textAlign: "center", color: "black", direction: "rtl" }}><img alt="infinite" src={infinite} width="100" /></Modal.Body>
            </Modal>
            {list}
        </HoldProducts>
        <div onClick={() =>reset()}>
            <img alt="reset1" src={reset1} width="40" style={{ marginTop: "15px" }} />
            <div style={{ marginTop: "5px", fontSize: "1rem" }}>אפס רשימה</div>
        </div>
        </div>)
}
export default Dinamic;