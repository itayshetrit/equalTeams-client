import React from "react";
import { useDispatch } from 'react-redux';
import { Main, MainDiv, RInput, Span, Submit, HoldMain, Form, Group, SpanRed } from '../../LogAndReg/style'
import { useToasts } from "react-toast-notifications";
import { useForm } from 'react-hook-form';
import user from '../../../assets/pics/auth/user.svg';
import { sha512 } from 'js-sha512';
import stadium from '../../../assets/pics/auth/stadium.svg';
import phone from '../../../assets/pics/auth/phone.svg';
import password from '../../../assets/pics/auth/password.svg';
import { addUser } from '../../../store/actions/users/user-actions';
import { ToastMsg, Title, PositionRelative, PlaceHolderImage } from '../../common/Style';
import Logout from '../../common/components/LogoutAll';
const AddUser = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const onSubmit = async data => {
    dispatch(addUser({ ...data, password: sha512(data.password) })).then(res => {
      if (!res.error) {
        addToast(<ToastMsg>הפעולה הצליחה</ToastMsg>, { appearance: "success", autoDismiss: true });
      }
      else {
        addToast(<ToastMsg>{res.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
      }
    })
  }
  return (<MainDiv>
    <Title style={{ textDecoration: "underline", margin: "30px auto", color: "white" }}>Gal Vaizman</Title>
    <HoldMain>
      <Main className="animated fadeIn slow">
        <Title style={{ fontSize: "1.8rem", margin: "20px auto" }}>Add User</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Group>
            <PositionRelative>
              <PlaceHolderImage src={user} style={{ width: "15px" }} alt="user" />
              <RInput placeholder="שם פרטי" type="text" name="fname" ref={register({ required: true, pattern: /^[A-Za-zא-ת]+$/i, minLength: 2, maxLength: 20 })} />
            </PositionRelative>
            {errors.fname && errors.fname.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
            {errors.fname && (errors.fname.type === 'maxLength' || errors.fname.type === 'minLength' ||
              errors.fname.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
          </Group>
          <Group>
            <PositionRelative>
              <PlaceHolderImage src={user} style={{ width: "15px" }} alt="user" />
              <RInput placeholder="שם משפחה" type="text" name="lname" ref={register({ required: true, pattern: /^[A-Za-zא-ת]+$/i, minLength: 2, maxLength: 20 })} />
            </PositionRelative>
            {errors.lname && errors.lname.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
            {errors.lname && (errors.lname.type === 'maxLength' || errors.lname.type === 'minLength' ||
              errors.lname.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
          </Group>
          <Group>
            <PositionRelative>
              <PlaceHolderImage src={stadium} style={{ width: "20px", top:"0", transform: "rotate(90deg)" }} alt="user" />
              <RInput placeholder="מגרש" type="text" name="stadium" ref={register({ required: true, pattern: /^[A-Za-zא-ת]+$/i, minLength: 2, maxLength: 20 })} />
            </PositionRelative>
            {errors.stadium && errors.stadium.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
            {errors.stadium && (errors.stadium.type === 'maxLength' || errors.stadium.type === 'minLength' ||
              errors.stadium.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 2-20 אותיות (עברית ואנגלית) בלבד </Span><SpanRed>!</SpanRed></Span>}
          </Group>
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
              <RInput defaultValue="123456" placeholder="סיסמא" name="password" ref={register({ required: true, pattern: /^[A-Za-z0-9א-ת]+$/i, minLength: 6, maxLength: 20 })} />
            </PositionRelative>
            {errors.password && errors.password.type === 'required' && <Span><SpanRed>!</SpanRed><Span> שדה חובה </Span><SpanRed>!</SpanRed></Span>}
            {errors.password && (errors.password.type === 'maxLength' || errors.password.type === 'minLength' ||
              errors.password.type === 'pattern') && <Span><SpanRed>!</SpanRed><Span> 6-20 אותיות וספרות בלבד </Span><SpanRed>!</SpanRed></Span>}
          </Group>
          <Submit type="submit">הוספה</Submit>
        </Form>
      </Main>
      <Logout />
    </HoldMain>
  </MainDiv>
  )
}

export default AddUser;