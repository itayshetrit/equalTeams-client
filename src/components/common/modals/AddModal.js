import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Add from '../client/Add'
const AddModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div onClick={handleShow} className="aaa">הוספה</div>
            <Modal show={show} onHide={handleClose} animation={true}>
            <Add handleClose={handleClose}/>
            </Modal>
        </div>
    );
}
export default AddModal;