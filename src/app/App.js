import React, { useEffect } from 'react';
import './App.css';
import { ToastProvider } from "react-toast-notifications";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'
import infinite from '../assets/spinners/spinner.svg'
import { checkAuth1 } from '../store/actions/auth/auth-actions'
import UnAuthNav from '../components/LogAndReg/UnAuthNav' 
import ClientNav from '../components/client/ClientSwitch'
import AdminNav from '../components/admin/AdminSwitch' 
import { withRouter } from 'react-router-dom';


function App({ history }) {
  const auth = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.user) {
      dispatch(checkAuth1());
    }
  }, [auth.authenticated]);

  useEffect(() => {
    history.replace(auth.authRedirectPath);
  }, [auth.authRedirectPath, history]);

  let view = <><UnAuthNav /></>
  if (auth.authenticated && !auth.loading && auth.user && auth.user.role===2) {
    view = <><AdminNav /></>
  }
  else if (auth.authenticated && !auth.loading && auth.user && auth.user.role===1) {
    view = <><ClientNav /></>
  }

  return (
    <div className="App animated fadeIn">
      <ToastProvider placement="bottom-center">{view}</ToastProvider>
      <Modal centered show={auth.loading} animation={true}>
                <Modal.Body style={{ textAlign: "center", color: "black", direction: "rtl" }}><img alt="infinite" src={infinite} width="200" /></Modal.Body>
            </Modal>
    </div>
  );
}

export default withRouter(App);
