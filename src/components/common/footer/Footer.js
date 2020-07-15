import React from "react";
import { Nav } from './style'
import Routes from '../../routes/index'
import call from '../../../assets/pics/footer/phone.svg';
import Logout from '../components/Logout';
import whatsapp from '../../../assets/pics/footer/whatsapp1.svg';
import { Link } from 'react-router-dom';
import plusSquare from '../../../assets/pics/footer/plus-square.svg';
const Footer = (props) => {
    return(<Nav>
      <div><Logout /></div>
        <div className="animated fadeInDownBig delay-1s slow"><Link to={Routes.Client.add}><img className="animated wobble delay-4s" src={plusSquare} alt="plus" style={{animationIterationCount:"3"}} /></Link></div>
        <div><a href="https://wa.me/+972536073640" target={"_blank"} rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" /></a></div>
        <div><a href="tel:0536073640"><img src={call} alt="call" /></a></div>
      </Nav>)
}

export default Footer;