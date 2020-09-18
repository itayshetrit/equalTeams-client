import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Main, MainDiv, Input, Span, Submit, HoldMain, Form, Yet, Group, SpanRed } from '../../LogAndReg/style'
import { useToasts} from "react-toast-notifications";
import { useForm } from 'react-hook-form'
import user from '../../../assets/pics/auth/user.svg'
import { sha512 } from 'js-sha512'
import phone from '../../../assets/pics/auth/phone.svg'
import password from '../../../assets/pics/auth/password.svg'
import { register1 } from '../../../store/actions/auth/auth-actions'
import { ToastMsg, Title, PositionRelative, PlaceHolderImage  } from '../../common/Style'
import Logout from '../../common/components/LogoutAll'
const Register = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const onSubmit = async data => {
    dispatch(register1({...data, password: sha512(data.password)})).then(res => {
      if(!res.error){
        addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
      }
      else{
        addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
      }
    })
  }
  return (<MainDiv style={{backgroundImage: "linear-gradient(120deg, blueviolet 0%, rgba(126, 60, 187, 0.836) 100%)"}}>
    <Title style={{ color: "white", position: "absolute", top: "0", margin: "40px auto" }}>Be Simple</Title>
    <HoldMain>
    <Main className="animated fadeIn slow">
    <Title style={{ fontSize: "1.8rem", margin: "20px auto" }}>Register</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Group>
          <PositionRelative>
            <PlaceHolderImage src={user} style={{ width: "15px" }} alt="user" />
            <Input placeholder="שם מלא" className="input" type="text" name="name" ref={register({ required: true, pattern: /^[A-Za-zא-ת ]+$/i, minLength: 2, maxLength: 20 })} />
          </PositionRelative>
          {errors.name && errors.name.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.name && (errors.name.type === 'maxLength' || errors.name.type === 'minLength' ||
            errors.name.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
        </Group>
        <Group>
          <PositionRelative>
            <PlaceHolderImage src={phone} style={{ width: "15px" }} alt="phone" />
            <Input placeholder="מס' פלאפון" name="phone" ref={register({ required: true, pattern: /^[0]{1}[5]{1}[0-9]{8}$/ })} />
          </PositionRelative>
          {errors.phone && errors.phone.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.phone && (errors.phone.type === 'maxLength' || errors.phone.type === 'minLength' ||
            errors.phone.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> מספר פלאפון לא חוקי </Span><SpanRed>!</SpanRed></Span>}
        </Group>
  
        <Group>
          <PositionRelative>
            <PlaceHolderImage src={password} style={{ width: "15px" }} alt="password" />
            <Input placeholder="סיסמא" name="password" ref={register({ required: true, pattern: /^[A-Za-z0-9א-ת]+$/i, minLength: 6, maxLength: 20 })} />
          </PositionRelative>
          {errors.password && errors.password.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.password && (errors.password.type === 'maxLength' || errors.password.type === 'minLength' ||
            errors.password.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 6-20 אותיות וספרות בלבד </Span><SpanRed>!</SpanRed></Span>}
        </Group>    
        <Submit type="submit">הרשמה</Submit>
      </Form>
    </Main>
    </HoldMain>
    {/* <Logout /> */}
  </MainDiv>
  )
}

export default Register;