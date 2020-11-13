import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useForm } from 'react-hook-form';
import { sha512 } from 'js-sha512';

import Routes from '../routes/index';

import { Main, HoldMain, RInput, MainDiv, Span, Submit, Form, Group, SpanRed, Yet } from './style';
import { Title, PositionRelative, PlaceHolderImage, ToastMsg } from '../common/Style';

import phone from '../../assets/pics/auth/phone.svg';
import password from '../../assets/pics/auth/password.svg';

import { registration } from '../../store/actions/auth/auth-actions';

const Register = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    dispatch(registration({ phone: data.phone, password: sha512(data.password) })).then(data => {
      if (data.error) {
        addToast(<ToastMsg>{data.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
      }
      else {
        addToast(<ToastMsg>נרשמת בהצלחה!!</ToastMsg>, { appearance: "success", autoDismiss: true, autoDismissTimeout: 2000 });
      }
    })
  }
  return (<MainDiv className="App animated fadeIn">
    <Title style={{ color: "white", position: "absolute", top: "0", margin: "40px auto" }}>Equal Teams</Title>
    <HoldMain>
      <Main>
        <Title style={{ fontSize: "1.8rem", margin: "20px auto", fontFamily: "Varela" }}>הרשמה</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Group>
            <PositionRelative>
              <PlaceHolderImage src={phone} style={{ width: "15px" }} alt="phone" />
              <RInput placeholder="מס' פלאפון" name="phone" ref={register({ required: true, pattern: /^[0]{1}[5]{1}[0-9]{8}$/ })} />
            </PositionRelative>
            {errors.phone && errors.phone.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
            {errors.phone && (errors.phone.type === 'maxLength' || errors.phone.type === 'minLength' ||
              errors.phone.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> מספר פלאפון לא חוקי </Span><SpanRed>!</SpanRed></Span>}
          </Group>

          <Group>
            <PositionRelative>
              <PlaceHolderImage src={password} style={{ width: "15px" }} alt="password" />
              <RInput placeholder="סיסמא" name="password" ref={register({ required: true, pattern: /^[A-Za-z0-9א-ת]+$/i, minLength: 6, maxLength: 20 })} />
            </PositionRelative>
            {errors.password && errors.password.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
            {errors.password && (errors.password.type === 'maxLength' || errors.password.type === 'minLength' ||
              errors.password.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 6-20 אותיות וספרות בלבד </Span><SpanRed>!</SpanRed></Span>}
          </Group>
          <Submit type="submit">הרשמה</Submit>
        </Form>
        <Yet as={Link} to={Routes.LogAndReg.login}>כבר רשום?</Yet>
      </Main>
    </HoldMain>

  </MainDiv>
  )
}

export default Register;