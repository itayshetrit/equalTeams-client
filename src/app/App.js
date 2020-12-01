import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastProvider } from "react-toast-notifications";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/loads/Loading'
import { checkAuth } from '../store/actions/auth/auth-actions'
import UnAuthNav from '../components/LogAndReg/UnAuthNav' //login and register
// import ClientNav from '../components/client/ClientSwitch' // client
import AdminNav from '../components/admin/AdminSwitch' // admin
import { withRouter } from 'react-router-dom';
import infinite from '../assets/spinners/spinner.svg'
import Footer from '../components/common/footer/Footer'

function App() {
  const [footer, setFooter] = useState(false)
  const election = useSelector(state => state.electionsReducer);
  const auth = useSelector(state => state.authReducer);
  const user = useSelector(state => state.userReducer);
  const users = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.user) {
      dispatch(checkAuth());
    }
  }, [auth.authenticated]);

  // useEffect(() => {
  //   history.replace(auth.authRedirectPath);
  // }, [auth.authRedirectPath, history]);

  let view;
  if (auth.loading) {
    view = <><Loading /></>
  }
  else if (auth.authenticated && !auth.loading && auth.user) {
    view = <>
      <AdminNav />
      <Footer />
    </>
  }
  // else if (auth.authenticated && !auth.loading && auth.user && auth.user.role === 1) {
  //   view = null;
  //   // <><ClientNav /></>
  // }
  else if (!auth.authenticated && !auth.loading) {
    view = <><UnAuthNav /></>
  }
  return (
    <div className="App animated fadeIn">
      <ToastProvider placement="bottom-center">
        {view}

      </ToastProvider>
      <Modal centered show={user.loading || users.loading || election.loading} animation={true}>
        <Modal.Body style={{ textAlign: "center", color: "black", direction: "rtl" }}><img alt="infinite" src={infinite} width="200" /></Modal.Body>
      </Modal>
    </div>
  );
}

export default withRouter(App);
