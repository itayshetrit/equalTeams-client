import React, { useState } from "react";
import { Nav } from './Style';
import Routes from '../../routes/index';
import InfoModal from '../modals/InfoModal';
import { Link } from 'react-router-dom';
import home from '../../../assets/footer/home.svg'
import info from '../../../assets/footer/info.svg'
import LogoutAll from '../components/LogoutAll'
const Footer = () => {
  const [infoModal, setInfoModal] = useState(false);
  return (
    <Nav>
      <div><Link to={Routes.Admin.admin}><img src={home} alt="home" /></Link></div>
      <div><LogoutAll /></div>
      <div onClick={() => setInfoModal(true)}><img width="25" src={info} alt="info" /></div>
      {infoModal && <InfoModal onClose={setInfoModal} msg={"צריך לרשום פה מידע או דרכי התקשרות איתנו"} />}

    </Nav>
  )
}

export default Footer;