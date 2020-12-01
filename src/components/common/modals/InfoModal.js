import React from 'react';

import Modal from 'react-bootstrap/Modal';

import {Main} from '../../LogAndReg/style'

const InfoModal = (props) => {

    const handleClose = () => {
        props.onClose(null)
    };

    return (<Modal centered show={true} onHide={handleClose} animation={true}>
        <Main style={{height:"200px", fontSize:"1.2rem", display:"flex", 
        alignItems:"center", justifyContent:"center" }}>

        {props.msg}
        </Main>

    </Modal>)
}

export default InfoModal;