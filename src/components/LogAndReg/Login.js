import React from "react";
import { useDispatch } from 'react-redux';
import { Main, HoldMain, Input, MainDiv, Span, Submit, Form, Yet, Group, SpanRed } from './style'
import { Title, PositionRelative, PlaceHolderImage } from '../common/Style'
import mail from '../../assets/pics/auth/mail.svg'
import carts from '../../assets/pics/auth/carts.svg'
import password from '../../assets/pics/auth/password.svg'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Routes from '../routes/index'
import { login1 } from '../../store/actions/auth/auth-actions'
import { useToasts } from "react-toast-notifications";
import { ToastMsg } from '../common/Style'
const Login = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    dispatch(login1(data.email, data.password)).then(data => {
      if (data.error) {
        addToast(<ToastMsg>{data.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
      }
      else{
        addToast(<ToastMsg>התחברת בהצלחה!!</ToastMsg>, { appearance: "success", autoDismiss: true, autoDismissTimeout: 2000 });
      }
    })
  }
  return (<MainDiv>
    <Title style={{color: "white" }}>SHOPPING LIST</Title>
    <HoldMain>
    <Main className="animated fadeIn slow">
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Submit type="submit">התחברות</Submit>
        <Yet as={Link} to={Routes.LogAndReg.register}>עדיין לא נרשמת?</Yet>
      <div style={{marginTop:"20px"}}><img alt="carts" src={carts} width="50" /></div>
      </Form>
    </Main>
    </HoldMain>
      {/* <img src={p1} width="200" /> */}

  </MainDiv>
  )
}

export default Login;