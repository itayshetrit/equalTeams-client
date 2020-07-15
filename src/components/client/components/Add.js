import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Main, MainDiv, Input, Span, Submit, HoldMain, Form, Yet, Group, SpanRed } from '../../LogAndReg/style'
import { useToasts } from "react-toast-notifications";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { useForm } from 'react-hook-form'
import Switch from "react-switch";
import carts from '../../../assets/pics/auth/carts.svg'
import Routes from '../../routes/index'
import plusp from '../../../assets/pics/auth/plusp.svg'
import minusp from '../../../assets/pics/auth/minusp.svg'
import { editProductStatus } from '../../../store/actions/products/product-actions'
import { ToastMsg, Title } from '../../common/Style'
import infinite from '../../../assets/spinners/infinite.svg'
const Add = (props) => {
    const { static_list, dinamic_list } = useSelector(state => state.authReducer.user);
    const { smallLoading } = useSelector(state => state.authReducer);
    const [list, setList] = useState(true)
    const [amount, setAmount] = useState(1)
    const { register, handleSubmit, errors } = useForm()
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const edit = (fff) => {
        dispatch(editProductStatus(fff)).then(data => {
            if (!data.error) {

                addToast(<ToastMsg>הפעולה בוצעה בהצלחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                addToast(<ToastMsg>קיימת בעיה - פנה למנהל המערכת</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }
    const onSubmit = async data => {
        // setLoad(true)
        let prod = {
            name: data.name,
            amount: parseInt(amount),
            status: false
        }
        if (list) {
            let check = static_list.filter(item => item.name === data.name)
            if(check[0]){
                addToast(<ToastMsg>המוצר כבר קיים ברשימת הקניות שלך</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
            else{
                static_list.push(prod)
                edit({ static_list })
            }
        }
        else {
            let check = dinamic_list.filter(item => item.name === data.name)
            if(check[0]){
                addToast(<ToastMsg>המוצר כבר קיים ברשימת הקניות שלך</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
            else{
                dinamic_list.push(prod)
                edit({ dinamic_list })
            }
        }
    }
    return (<MainDiv>
        <Modal centered show={smallLoading} animation={true} style={{ border: 'none !important', backgroundColor: "none" }}>
                <Modal.Body style={{ textAlign: "center", color: "black", direction: "rtl" }}><img alt="infinite" src={infinite} width="100" /></Modal.Body>
            </Modal>
        <Title style={{ color: "white" }}>SHOPPING LIST</Title>
        <HoldMain>
            <Main className="animated fadeIn slow">
                <Title>Add Product</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ color: "black", fontWeight: "bold" }}>רשימה</div>
                    <Group>
                        <HoldMain style={{ flexDirection: "row", justifyContent: "space-evenly", width: "70%", margin: "0 auto" }}>
                            <div style={{ color: "black", fontWeight: "bold" }}>קבועה</div>
                            <Switch width={32} height={16} onColor={'#85dd00'} offColor={'#FFA500'} checkedIcon={false} uncheckedIcon={false} checked={list}
                                onChange={() => setList(!list)} />
                            <div style={{ color: "black", fontWeight: "bold" }}>משתנה</div>
                        </HoldMain>
                    </Group>
                    <Group>
                        <Input placeholder="שם המוצר" name="name" ref={register({ required: true, pattern: /^[ A-Za-z1-9א-ת]+$/i, minLength: 2, maxLength: 20 })} />
                        {errors.name && errors.name.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
                        {errors.name && (errors.name.type === 'maxLength' || errors.name.type === 'minLength' ||
                            errors.name.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> (2-20) אותיות, מספרים ורווחים בלבד </Span><SpanRed>!</SpanRed></Span>}
                    </Group>
                    <Group>
                        <div style={{ color: "black", fontWeight: "bold" }}>כמות</div>
                        <HoldMain style={{ flexDirection: "row", justifyContent: "space-evenly", width: "50%", margin: "0 auto" }}>
                            <img alt="plusp" src={plusp} width="25" onClick={() => {
                                if ((amount + 1) < 100) {
                                    setAmount(amount + 1)
                                }
                            }} />
                            <div style={{ color: "black", fontWeight: "bold" }}>{amount}</div>
                            <img alt="minusp" src={minusp} width="25" onClick={() => {
                                if ((amount - 1) > 0) {
                                    setAmount(amount - 1)
                                }
                            }} />
                        </HoldMain>
                    </Group>
                    <Submit type="submit">הוספה</Submit>
                    <Yet as={Link} to={Routes.Client.client}>חזרה לדף הראשי</Yet>
                    <div style={{ marginTop: "20px" }}><img alt="carts" src={carts} width="50" /></div>
                </Form>
            </Main>
        </HoldMain>
    </MainDiv>
    )
}

export default Add;