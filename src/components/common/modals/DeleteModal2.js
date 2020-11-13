import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const modal_del = () => {
        props.del(props.id);
        setShow(false);
        props.gU()
    }
    const handleShow = () => setShow(true);

    return (
        <div>
            <div onClick={handleShow} style={{cursor:"pointer"}}>{props.button}</div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header style={{display:"flex" , justifyContent:"center", backgroundColor:"white"}}>
                    <Modal.Title>מחיקת רשומה</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center", backgroundColor:"white" }}>?האם את/ה בטוח/ה שברצונך למחוק רשומה זו</Modal.Body>
                <Modal.Footer style={{ justifyContent: "space-around", backgroundColor:"white" }}>
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