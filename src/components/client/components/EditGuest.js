import React, { useState } from 'react';
import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser' // or whatever Joi library you are using

// ReactJoiValidations.setJoi(Joi);
import validate from 'react-joi-validation';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { connect } from 'react-redux';
import { Main, MainDiv, Input, Span, Submit, HoldMain, Form, Yet, Group, SpanRed } from '../../LogAndReg/style'
import { ToastMsg, Title, PositionRelative, PlaceHolderImage } from '../../common/Style'
import { editGuestById } from '../../../store/actions/guests/guest-actions'
// import { useForm } from 'react-hook-form'
var schema = Joi.object().keys({
    name: Joi.string().min(2).required()
    // password: Joi.string().min(8).required()
});
const EditGuest = (props) => {
    console.log(props)
    EditGuest.defaultProps = {
        name: props.data.name
        // password: ''
    };
    const {
        user: { name },
        errors, changeHandler, validateHandler
    } = {...props.data};
    const [vname, setVname] = useState()
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
    const onSubmit = async data => {
        console.log(data)
        let p = {
            name: data.name, phone: data.phone, sum: data.sum, closeness: data.closeness,
            accept: data.accept, table: data.table, arrived: data.arrived, gift: data.gift, note: data.note
        }
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
                <Form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <TextField
                        value={name}
                        onChange={changeHandler('name')}
                        onBlur={validateHandler('name')}
                        id="outlined-name"
                        label="שם מלא"
                        defaultValue={props.data.name}
                        variant="outlined"
                    // name="name"
                    // ref={register({ required: true, pattern: /^[ -A-Za-z1-9א-ת]+$/i, minLength: 2, maxLength: 30 })}
                    />
                    <div>

                    </div>
                    <Submit type="submit">הרשמה</Submit>
                </Form>
            </Main>
        </HoldMain>
        // <div className="body2">
        //     <div style={{ border: "none", background: "inherit" }}>
        //         <form className="form" onSubmit={handleSubmit(onSubmit)}>
        //             <p className="p">עריכה</p>
        //             <div>
        //                 <label className="label">שם</label>
        //                 <input defaultValue={props.data.name} className="input" name="name" ref={register({ required: true, pattern: /^[ -A-Za-z1-9א-ת]+$/i, minLength: 2, maxLength: 30 })} />
        //                 {errors.name && errors.name.type === 'required' && <span className="span">שדה חובה</span>}
        //                 {errors.name && (errors.name.type === 'maxLength' || errors.name.type === 'minLength' ||
        //                     errors.name.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}
        //             </div>
        //             <div>
        //                 <label className="label">מס' פלאפון</label>
        //                 <input defaultValue={props.data.phone} className="input" name="phone" ref={register({ required: true, pattern: /^[0]{0,1}[5]{1}[0-9]{8}$/ })} />
        //                 {errors.phone && errors.phone.type === 'required' && <span className="span">שדה חובה</span>}
        //                 {errors.phone && (errors.phone.type === 'pattern') && <span className="span">מספר פלאפון לא חוקי</span>}
        //             </div>
        //             <div>
        //                 <label className="label">הוזמנו</label>
        //                 <input defaultValue={props.data.sum} className="input" name="sum" ref={register({ pattern: /^[ A-Za-z1-9א-ת]+$/i, minLength: 1, maxLength: 20 })} />
        //                 {/* {errors.sum && errors.sum.type === 'required' && <span className="span">שדה חובה</span>} */}
        //                 {errors.sum && (errors.sum.type === 'maxLength' || errors.sum.type === 'minLength' ||
        //                     errors.sum.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}

        //             </div>
        //             <div>
        //                 <label className="label">קירבה</label>
        //                 <input defaultValue={props.data.closeness} className="input" name="closeness" ref={register({ pattern: /^[ A-Za-z1-9א-ת]+$/i, minLength: 2, maxLength: 20 })} />
        //                 {/* {errors.closeness && errors.closeness.type === 'required' && <span className="span">שדה חובה</span>} */}
        //                 {errors.closeness && (errors.closeness.type === 'maxLength' || errors.closeness.type === 'minLength' ||
        //                     errors.closeness.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}

        //             </div>
        //             <div>
        //                 <label className="label">אישרו</label>
        //                 <input defaultValue={props.data.accept} className="input" name="accept" ref={register({ pattern: /^[ A-Za-z0-9א-ת]+$/i, minLength: 1, maxLength: 20 })} />
        //                 {/* {errors.accept && errors.accept.type === 'required' && <span className="span">שדה חובה</span>} */}
        //                 {errors.accept && (errors.accept.type === 'maxLength' || errors.accept.type === 'minLength' ||
        //                     errors.accept.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}

        //             </div>
        //             <div>
        //                 <label className="label">שולחן</label>
        //                 <input defaultValue={props.data.table} className="input" name="table" ref={register({ pattern: /^[ A-Za-z0-9א-ת]+$/i, minLength: 1, maxLength: 20 })} />
        //                 {/* {errors.table && errors.table.type === 'required' && <span className="span">שדה חובה</span>} */}
        //                 {errors.table && (errors.table.type === 'maxLength' || errors.table.type === 'minLength' ||
        //                     errors.table.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}

        //             </div>
        //             <div>
        //                 <label className="label ora">הגיעו</label>
        //                 <input defaultValue={props.data.arrived} className="input" name="arrived" ref={register({ pattern: /^[ A-Za-z0-9א-ת]+$/i, minLength: 1, maxLength: 20 })} />
        //                 {errors.arrived && errors.arrived.type === 'required' && <span className="span">שדה חובה</span>}
        //                 {errors.arrived && (errors.arrived.type === 'maxLength' || errors.arrived.type === 'minLength' ||
        //                     errors.arrived.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}

        //             </div>
        //             <div>
        //                 <label className="label">מתנה</label>
        //                 <input defaultValue={props.data.gift} className="input" name="gift" ref={register({ pattern: /^[ A-Za-z0-9א-ת]+$/i, minLength: 1, maxLength: 20 })} />
        //                 {/* {errors.gift && errors.gift.type === 'required' && <span className="span">שדה חובה</span>} */}
        //                 {errors.gift && (errors.gift.type === 'maxLength' || errors.gift.type === 'minLength' ||
        //                     errors.gift.type === 'pattern') && <span className="span">2-20 אותיות וספרות בלבד</span>}

        //             </div>
        //             <div>
        //                 <label className="label">הערות</label>
        //                 <input defaultValue={props.data.note} className="input" name="note" ref={register({ pattern: /^[,-. A-Za-z0-9א-ת]+$/i, minLength: 2, maxLength: 40 })} />
        //                 {/* {errors.note && errors.note.type === 'required' && <span className="span">שדה חובה</span>} */}
        //                 {errors.note && (errors.note.type === 'maxLength' || errors.note.type === 'minLength' ||
        //                     errors.note.type === 'pattern') && <span className="span">2-40 אותיות וספרות בלבד</span>}

        //             </div>
        //             <br />
        //             <button className="button" variant="dark" type="submit">שמירה</button>
        //             <br />
        //             {/* <span className="span">{msg}</span> */}
        //         </form>
        //     </div>
        // </div>
    );

    

}
var validationOptions = {
    joiSchema: schema,
    only: 'user'
};

validate(EditGuest, validationOptions)
export default EditGuest;