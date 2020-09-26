import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Edit from '../../client/components/EditGuest'
import pencil from '../../../assets/pics/guests/pencil.svg'
const EditModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div onClick={handleShow} ><img alt="edit" src={pencil} width="22" style={{cursor: "pointer"}} /></div>
            <Modal show={show} onHide={handleClose} animation={true}>
            <Edit data={props.data} handleClose={handleClose}/>
            {/* <Edit data={props.data} setUpdate={props.setUpdate} update={props.update} handleClose={handleClose}/> */}
            </Modal>
        </div>
    );
}
export default EditModal;