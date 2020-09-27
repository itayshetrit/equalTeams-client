import React, { useState } from 'react';
import Validator from 'validatorjs';

import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { connect } from 'react-redux';
import { Main, MainDiv, Input, Span, Submit, HoldMain, Form, Yet, Group, SpanRed } from '../../LogAndReg/style'
import { ToastMsg, Title, PositionRelative, PlaceHolderImage } from '../../common/Style'
import { editGuestById } from '../../../store/actions/guests/guest-actions'
// import { useForm } from 'react-hook-form'

let rules = {
    name: (/^[ -"A-Zא-תa-z1-9]{2,20}$/),
    phone: (/^[0]{0,1}[5]{1}[0-9]{8}$/),
    sum: (/^[0-9]{0,1}$/),
    closeness: (/^[ -A-Zא-תa-z1-9]{2,20}$/),
    accept: (/^[0-9]{0,1}$/),
    table: (/^[0-9]{0,2}$/),
    arrived: (/^[0-9]{0,1}$/),
    gift: (/^[0-9]{0,6}$/),
    notes: (/^[ -,A-Zא-תa-z1-9]{2,20}$/)
};
const EditGuest = (props) => {
    let g = 'error';
    const [vname, setVname] = useState(props.data.name)
    const [ename, setEname] = useState(null)
    const [hname, setHname] = useState(null)

    const [vphone, setVphone] = useState(props.data.phone)
    const [ephone, setEphone] = useState(null)
    const [hphone, setHphone] = useState(null)

    const [vsum, setVsum] = useState(props.data.sum)
    const [esum, setEsum] = useState(null)
    const [hsum, setHsum] = useState(null)

    const [vcloseness, setVcloseness] = useState(props.data.closeness)
    const [ecloseness, setEcloseness] = useState(null)
    const [hcloseness, setHcloseness] = useState(null)

    const [vaccept, setVaccept] = useState(props.data.accept)
    const [eaccept, setEaccept] = useState(null)
    const [haccept, setHaccept] = useState(null)

    const [vtable, setVtable] = useState(props.data.table)
    const [etable, setEtable] = useState(null)
    const [htable, setHtable] = useState(null)

    const [varrived, setVarrived] = useState(props.data.arrived)
    const [earrived, setEarrived] = useState(null)
    const [harrived, setHarrived] = useState(null)

    const [vgift, setVgift] = useState(props.data.gift)
    const [egift, setEgift] = useState(null)
    const [hgift, setHgift] = useState(null)

    const [vnotes, setVnotes] = useState(props.data.notes)
    const [enotes, setEnotes] = useState(null)
    const [hnotes, setHnotes] = useState(null)

    // const { register, handleSubmit, errors } = useForm()
    // const onSubmit = async data => {
    //     dispatch(register1({...data, password: sha512(data.password)})).then(res => {
    //       if(!res.error){
    //         addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
    //       }
    //       else{
    //         addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
    //       }
    //     })
    //   }
    const SubmitHandler = async e => {
        e.preventDefault()
        if ((rules.name).test(vname)) {
            setHname(null)
            setEname(false)
        }
        else {
            setHname('2-20 אותיות וספרות בלבד')
            setEname(true)
        }

        if ((rules.phone).test(vphone)) {
            setHphone(null)
            setEphone(false)
        }
        else {
            setHphone('מספר פלאפון לא חוקי')
            setEphone(true)
        }

        if ((rules.sum).test(vsum)) {
            setHsum(null)
            setEsum(false)
        }
        else {
            setHsum('ספרה בין 0-9')
            setEsum(true)
        }

        if ((rules.closeness).test(vcloseness)) {
            setHcloseness(null)
            setEcloseness(false)
        }
        else {
            setHcloseness('2-20 אותיות וספרות בלבד')
            setEcloseness(true)
        }

        if ((rules.accept).test(vaccept)) {
            setHaccept(null)
            setEaccept(false)
        }
        else {
            setHaccept('ספרה בין 0-9')
            setEaccept(true)
        }

        if ((rules.table).test(vtable)) {
            setHtable(null)
            setEtable(false)
        }
        else {
            setHtable('ספרה או שתיים בין 0-99')
            setEtable(true)
        }

        if ((rules.arrived).test(varrived)) {
            setHarrived(null)
            setEarrived(false)
        }
        else {
            setHarrived('ספרה בין 0-9')
            setEarrived(true)
        }

        if ((rules.gift).test(vgift)) {
            setHgift(null)
            setEgift(false)
        }
        else {
            setHgift('0-6 ספרות בלבד')
            setEgift(true)
        }

        if ((rules.notes).test(vnotes)) {
            setHnotes(null)
            setEnotes(false)
        }
        else {
            setHnotes("2-20 אותיות וספרות בלבד")
            setEnotes(true)
        }

        // let data = {
        //     name: vname
        // }
        // let validation = new Validator(data, rules);
        // console.log(validation.passes('name'))
        // let p = {
        //     name: data.name, phone: data.phone, sum: data.sum, closeness: data.closeness,
        //     accept: data.accept, table: data.table, arrived: data.arrived, gift: data.gift, note: data.note
        // }
        // dispatch(register1(p)).then(res => {
        //     if(!res.error){
        //       addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
        //     }
        //     else{
        //       addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
        //     }
        //   })

    }

    return (
        <HoldMain>
            <Main className="animated fadeIn slow">
                <Title style={{ fontSize: "1.8rem", margin: "20px auto" }}>עריכה</Title>
                <Form onSubmit={SubmitHandler} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <TextField
                        onChange={(e) => setVname(e.target.value)}
                        id="outlined-name"
                        label="שם מלא"
                        defaultValue={vname}
                        variant="outlined"
                        required
                        helperText={hname}
                        error={ename}
                        style={{ marginBottom: "15px", direction: "rtl" }}
                    />
                    <TextField
                        onChange={(e) => setVphone(e.target.value)}
                        id="outlined-name"
                        label="מס' פלאפון"
                        defaultValue={vphone}
                        variant="outlined"
                        required
                        helperText={hphone}
                        error={ephone}
                        style={{ marginBottom: "15px" }}
                    />

                    <TextField
                        onChange={(e) => setVsum(e.target.value)}
                        id="outlined-name"
                        label="הוזמנו"
                        defaultValue={vsum}
                        variant="outlined"
                        required
                        helperText={hsum}
                        error={esum}
                        style={{ marginBottom: "15px" }}
                    />

                    <TextField
                        onChange={(e) => setVcloseness(e.target.value)}
                        id="outlined-name"
                        label="קירבה"
                        defaultValue={vcloseness}
                        variant="outlined"
                        required
                        helperText={hcloseness}
                        error={ecloseness}
                        style={{ marginBottom: "15px", direction: "rtl" }}
                    />

                    <TextField
                        onChange={(e) => setVaccept(e.target.value)}
                        id="outlined-name"
                        label="אישרו"
                        defaultValue={vaccept}
                        variant="outlined"
                        helperText={haccept}
                        error={eaccept}
                        style={{ marginBottom: "15px" }}
                    />

                    <TextField
                        onChange={(e) => setVtable(e.target.value)}
                        id="outlined-name"
                        label="שולחן"
                        defaultValue={vtable}
                        variant="outlined"
                        helperText={htable}
                        error={etable}
                        style={{ marginBottom: "15px" }}
                    />

                    <TextField
                        onChange={(e) => setVarrived(e.target.value)}
                        id="outlined-name"
                        label="הגיעו"
                        defaultValue={varrived}
                        variant="outlined"
                        helperText={harrived}
                        error={earrived}
                        style={{ marginBottom: "15px" }}
                    />

                    <TextField
                        onChange={(e) => setVgift(e.target.value)}
                        id="outlined-name"
                        label="מתנה"
                        defaultValue={vgift}
                        variant="outlined"
                        helperText={hgift}
                        error={egift}
                        style={{ marginBottom: "15px", direction: "rtl" }}
                    />

                    <TextField
                        onChange={(e) => setVnotes(e.target.value)}
                        id="outlined-name"
                        label="הערות"
                        defaultValue={vnotes}
                        variant="outlined"
                        helperText={hnotes}
                        error={enotes}
                        style={{ marginBottom: "15px", direction: "rtl" }}
                    />

                    <Submit type="submit">שמירה</Submit>
                </Form>
            </Main>
        </HoldMain>
    );



}

export default EditGuest;