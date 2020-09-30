import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Edit from '../../client/components/EditGuest'
import Add from '../../client/components/AddGuest'
import pencil from '../../../assets/pics/guests/pencil.svg'
const EditModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div onClick={handleShow} style={{cursor:"pointer"}}>{props.button}</div>
            <Modal show={show} onHide={handleClose} animation={true}>
                {props.act === "edit"
                    ?
                    <Edit data={props.data} handleClose={handleClose} gG={props.gG} />
                    :
                    <Add handleClose={handleClose} gG={props.gG} />}
                {/* <Edit data={props.data} handleClose={handleClose} gG={props.gG} act={props.act} /> */}
            </Modal>
        </div>
    );
}
export default EditModal;