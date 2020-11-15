import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Edit from '../../admin/components/EditUser'
const EditModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div onClick={handleShow} style={{cursor:"pointer"}}>{props.button}</div>
            <Modal show={show} onHide={handleClose} animation={true}>
                    <Edit data={props.data} handleClose={handleClose} gU={props.gU} />
            </Modal>
        </div>
    );
}
export default EditModal;