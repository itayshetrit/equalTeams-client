import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import trash from '../../../assets/pics/guests/trash.svg'
const DeleteModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const modal_del = () => {
        props.del(props.id);
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <div>
            <div onClick={handleShow} ><img alt="trash" src={trash} width="22" style={{cursor: "pointer"}} /></div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header style={{display:"flex" , justifyContent:"center"}}>
                    <Modal.Title>מחיקת רשומה</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>?האם את/ה בטוח/ה שברצונך למחוק רשומה זו</Modal.Body>
                <Modal.Footer style={{ justifyContent: "space-around" }}>
                    <Button variant="success" onClick={handleClose}>
                        לא
                    </Button>
                    <Button variant="danger" onClick={() => modal_del()}>
                        כן
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default DeleteModal;