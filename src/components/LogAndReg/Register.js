import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Main, MainDiv, Input, Span, Submit, HoldMain, Form, Yet, Group, SpanRed } from './style'
import { useToasts} from "react-toast-notifications";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import user from '../../assets/pics/auth/user.svg'
import carts from '../../assets/pics/auth/carts.svg'
import Routes from '../routes/index'
import mail from '../../assets/pics/auth/mail.svg'
import phone from '../../assets/pics/auth/phone.svg'
import password from '../../assets/pics/auth/password.svg'
import { register1 } from '../../store/actions/auth/auth-actions'
import { ToastMsg, Title, PositionRelative, PlaceHolderImage  } from '../common/Style'
import infinite from '../../assets/spinners/infinite.svg'
const Register = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const [load, setLoad] = useState(false)
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const onSubmit = async data => {
    setLoad(true)
    dispatch(register1(data)).then(res => {
      setLoad(false)
      if(!res.error){
        addToast(<ToastMsg>נרשמת בהצלחה!!</ToastMsg>, { appearance: "success", autoDismiss: true });
        props.history.push('/login');
      }
      else{
        addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
      }
    })
  }
  return (<MainDiv>
    <Title style={{color: "white" }}>SHOPPING LIST</Title>
    <HoldMain>
    <Main className="animated fadeIn slow">
    <Title>Register</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <PositionRelative>
            <PlaceHolderImage src={user} style={{ width: "15px" }} alt="mail" />
            <Input placeholder="שם משפחה" className="input" type="text" name="name" ref={register({ required: true, pattern: /^[A-Za-zא-ת ]+$/i, minLength: 2, maxLength: 20 })} />
          </PositionRelative>
          {errors.name && errors.name.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.name && (errors.name.type === 'maxLength' || errors.name.type === 'minLength' ||
            errors.name.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
        </Group>
        <Group>
          <PositionRelative>
            <PlaceHolderImage src={phone} style={{ width: "15px" }} alt="mail" />
            <Input placeholder="מס' פלאפון" name="phone" ref={register({ required: true, pattern: /^[0]{1}[5]{1}[0-9]{8}$/ })} />
          </PositionRelative>
          {errors.phone && errors.phone.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.phone && (errors.phone.type === 'maxLength' || errors.phone.type === 'minLength' ||
            errors.phone.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> מספר פלאפון לא חוקי </Span><SpanRed>!</SpanRed></Span>}
        </Group>
        <Group>
          <PositionRelative>
            <PlaceHolderImage src={mail} style={{ width: "15px" }} alt="mail" />
            <Input placeholder="אימייל" className="input" type="text" name="email" ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
          </PositionRelative>
          {errors.email && errors.email.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.email && (errors.email.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> כתובת אימייל אינה חוקית </Span><SpanRed>!</SpanRed></Span>}
        </Group>
        <Group>
          <PositionRelative>
            <PlaceHolderImage src={password} style={{ width: "15px" }} alt="mail" />
            <Input placeholder="סיסמא" name="password" ref={register({ required: true, pattern: /^[A-Za-z1-9א-ת]+$/i, minLength: 6, maxLength: 20 })} />
          </PositionRelative>
          {errors.password && errors.password.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
          {errors.password && (errors.password.type === 'maxLength' || errors.password.type === 'minLength' ||
            errors.password.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 6-20 אותיות וספרות בלבד </Span><SpanRed>!</SpanRed></Span>}
        </Group>
        {load ? <img alt="infinite" src={infinite} width="50" /> : ''}
        <Submit type="submit">הרשמה</Submit>
        <Yet as={Link} to={Routes.LogAndReg.login}>כבר רשום?</Yet>
        <div style={{marginTop:"20px"}}><img alt="carts" src={carts} width="50" /></div>
      </Form>
    </Main>
    </HoldMain>
  </MainDiv>
  )
}

export default Register;