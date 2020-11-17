import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from "react-toast-notifications";
import { useForm } from 'react-hook-form';
import { Main,  RInput, Span, Submit, Form, Group, SpanRed } from '../../LogAndReg/style';
import { ToastMsg, Title, PositionRelative, PlaceHolderImage } from '../../common/Style';
import user from '../../../assets/pics/auth/user.svg';
import phone from '../../../assets/pics/auth/phone.svg';
import plus from '../../../assets/pics/auth/plus_c.svg';
import minus from '../../../assets/pics/auth/minus_c.svg';
import { editUserById } from '../../../store/actions/users/user-actions';
import { MySlider } from '../../common/slider/SliderStyle';
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
                props.handleClose()
                props.render()
            }
            else {
                console.log((res.error));
                addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
            }
        })
    }

    return (
        <Main className="animated fadeIn" style={{ width: "100%" }}>
            <Title style={{ fontSize: "1.8rem", margin: "20px auto", fontFamily:"varela" }}>עריכת שחקן</Title>
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
                    <MySlider
                        max={10}
                        step={0.1}
                        // minDistance={2}
                        defaultValue={attack}
                        thumbText={"%"}
                        onChange={(value) => {
                            setAttack(value);
                        }}
                    />
                </Group>
                <Group>
                    <MySlider
                        max={10}
                        step={0.1}
                        // minDistance={2}
                        defaultValue={defense}
                        thumbText={"%"}
                        onChange={(value) => {
                            setDefense(value);
                        }}
                    />
                </Group>
                <Group>

                    <div style={{ display: "flex", flexDirection: "column", width: "30%", margin:"auto" }}>
                        <div style={{ textAlign: "center" }}>כביסה</div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <div><img style={{ cursor: "pointer" }} onClick={() => {
                                if (laundry + 1 < 11) {
                                    setLaundry(laundry + 1)
                                }
                            }} alt="plus" src={plus} width="20" /></div>
                            <div style={{ fontSize: "1rem" }}>{laundry}</div>
                            <div><img style={{ cursor: "pointer" }} onClick={() => {
                                if (laundry - 1 > -1) {
                                    setLaundry(laundry - 1)
                                }
                            }} alt="minus" src={minus} width="20" /></div>
                        </div>
                    </div>
                </Group>
                <Group>
                    <PositionRelative>
                        <PlaceHolderImage src={phone} style={{ width: "15px" }} alt="phone" />
                        <RInput placeholder="מס' פלאפון (לא חובה)" defaultValue={props.data.phone} name="phone" ref={register({ pattern: /^[0]{1}[5]{1}[0-9]{8}$/ })} />
                    </PositionRelative>
                    {errors.phone && errors.phone.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
                    {errors.phone && (errors.phone.type === 'maxLength' || errors.phone.type === 'minLength' ||
                        errors.phone.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> מספר פלאפון לא חוקי </Span><SpanRed>!</SpanRed></Span>}
                </Group>

                <Submit type="submit">שמירה</Submit>
            </Form>
        </Main >

    )

}
export default EditUser;