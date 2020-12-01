import React from "react";
import { Nav } from './Style'
import Routes from '../../routes/index'
// import Logout from '../components/Logout';
import { Link } from 'react-router-dom';
import home from '../../../assets/footer/home.svg'
import info from '../../../assets/footer/info.svg'
import LogoutAll from '../components/LogoutAll'
const Footer = (props) => {
    return(<Nav>
      {/* <div><Logout /></div> */}
      {/* <div className="animated fadeInDownBig delay-1s slow"><Link to={Routes.Client.info}><img className="animated wobble delay-4s" src={info} alt="info" style={{animationIterationCount:"3"}} /></Link></div> */}
      <div><Link to={Routes.Admin.admin}><img src={home} alt="home" /></Link></div>
      <div><LogoutAll /></div>
      <div><Link to={Routes.Admin.admin}><img src={info} alt="info" /></Link></div>
        {/* <div><a href="https://wa.me/+972536073640" target={"_blank"} rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" /></a></div> */}
        {/* <div><a href="tel:0536073640"><img src={call} alt="call" /></a></div> */}
        {/* <div><a href="https://payboxapp.page.link/hfPncgw1FD9zFJUe9" target={"_blank"}><img src={payment} alt="payment" /></a></div> */}
      </Nav>)
}

export default Footer;