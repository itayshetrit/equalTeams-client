import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from "react-toast-notifications";
import { useForm } from 'react-hook-form';
import { Main, MainDiv, RInput, Span, Submit, HoldMain, Form, Group, SpanRed } from '../../LogAndReg/style';
import { ToastMsg, Title, PositionRelative, PlaceHolderImage } from '../../common/Style';
import user from '../../../assets/pics/auth/user.svg';
import phone from '../../../assets/pics/auth/phone.svg';
import notes from '../../../assets/pics/auth/notes.svg';
import plus from '../../../assets/pics/auth/plus_c.svg';
import minus from '../../../assets/pics/auth/minus_c.svg';
import { editUserById, cleanUsers } from '../../../store/actions/users/user-actions';
const EditUser = props => {

    const [attack, setAttack] = useState(props.data.attack)
    const [defense, setDefense] = useState(props.data.defense)
    const [laundry, setLaundry] = useState(props.data.laundry)
    const { register, handleSubmit, errors } = useForm()
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    const onSubmit = async data => {
        console.log(data.notes);
        dispatch(editUserById(props.data._id, { ...data, attack, defense, laundry })).then(res => {
            if (!res.error) {
                addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
            }
            else {
                console.log((res.error));
                addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }

    return (<HoldMain style={{ direction: "rtl" }}>
        <Main className="animated fadeIn" style={{ width: "100%" }}>
            <Title style={{ fontSize: "1.8rem", margin: "20px auto" }}>edit</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Group>
                    <PositionRelative>
                        <PlaceHolderImage src={user} style={{ width: "15px" }} alt="user" />
                        <RInput placeholder="שם פרטי" defaultValue={props.data.fname} type="text" name="fname" ref={register({ required: true, pattern: /^[A-Za-zא-ת]+$/i, minLength: 2, maxLength: 20 })} />
                    </PositionRelative>
                    {errors.fname && errors.fname.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
                    {errors.fname && (errors.fname.type === 'maxLength' || errors.fname.type === 'minLength' ||
                        errors.fname.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
                </Group>
                <Group>
                    <PositionRelative>
                        <PlaceHolderImage src={user} style={{ width: "15px" }} alt="user" />
                        <RInput placeholder="שם משפחה" defaultValue={props.data.lname} type="text" name="lname" ref={register({ required: true, pattern: /^[A-Za-zא-ת]+$/i, minLength: 2, maxLength: 20 })} />
                    </PositionRelative>
                    {errors.lname && errors.lname.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
                    {errors.lname && (errors.lname.type === 'maxLength' || errors.lname.type === 'minLength' ||
                        errors.lname.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
                </Group>
                <Group>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "15%", justifyContent: "center" }}>
                            <div style={{ textAlign: "center" }}>התקפה</div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <div><img style={{ cursor: "pointer" }} onClick={() => {
                                    if (attack + 1 < 11) {
                                        setAttack(attack + 1)
                                    }
                                }} alt="plus" src={plus} width="20" /></div>
                                <div style={{ fontSize: "1rem" }}>{attack}</div>
                                <div><img style={{ cursor: "pointer" }} onClick={() => {
                                    if (attack - 1 > -1) {
                                        setAttack(attack - 1)
                                    }
                                }} alt="minus" src={minus} width="20" /></div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "15%" }}>
                            <div style={{ textAlign: "center" }}>הגנה</div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <div><img style={{ cursor: "pointer" }} onClick={() => {
                                    if (defense + 1 < 11) {
                                        setDefense(defense + 1)
                                    }
                                }} alt="plus" src={plus} width="20" /></div>
                                <div style={{ fontSize: "1rem" }}>{defense}</div>
                                <div><img style={{ cursor: "pointer" }} onClick={() => {
                                    if (defense - 1 > -1) {
                                        setDefense(defense - 1)
                                    }
                                }} alt="minus" src={minus} width="20" /></div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "15%" }}>
                            <div style={{ textAlign: "center" }}>כביסה</div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <div><img style={{ cursor: "pointer" }} onClick={() => {
                                    if (laundry + 1 < 11) {
                                        setLaundry(laundry + 1)
                                    }
                                }} alt="plus" src={plus} width="20" /></div>
                                <div style={{ fontSize: "1rem" }}>{laundry}</div>
                                <div><img style={{ cursor: "pointer" }} onClick={() => {
                                    if (laundry - 1 > 0) {
                                        setLaundry(laundry - 1)
                                    }
                                }} alt="minus" src={minus} width="20" /></div>
                            </div>
                        </div>
                    </div>
                </Group>
                <Group>
                    <PositionRelative>
                        <PlaceHolderImage src={phone} style={{ width: "15px" }} alt="phone" />
                        <RInput placeholder="מס' פלאפון" defaultValue={props.data.phone} name="phone" ref={register({ required: true, pattern: /^[0]{1}[5]{1}[0-9]{8}$/ })} />
                    </PositionRelative>
                    {errors.phone && errors.phone.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
                    {errors.phone && (errors.phone.type === 'maxLength' || errors.phone.type === 'minLength' ||
                        errors.phone.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> מספר פלאפון לא חוקי </Span><SpanRed>!</SpanRed></Span>}
                </Group>

                <Group>
                    <PositionRelative>
                        <PlaceHolderImage src={notes} style={{ width: "15px" }} alt="notes" />
                        <RInput defaultValue={props.data.notes} placeholder="הערות" name="notes" ref={register({ pattern: /^[,-. A-Za-z0-9א-ת]+$/i, minLength: 2, maxLength: 20 })} />
                    </PositionRelative>

                    {errors.notes && errors.notes.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
                    {errors.notes && (errors.notes.type === 'maxLength' || errors.notes.type === 'minLength' ||
                        errors.notes.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות וספרות בלבד </Span><SpanRed>!</SpanRed></Span>}
                </Group>
                <Submit type="submit">שמירה</Submit>
            </Form>
        </Main>
    </HoldMain>
    )

}
export default EditUser;