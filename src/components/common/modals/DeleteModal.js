import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteModal = (props) => {

    const handleClose = () => { props.closeModal(null); };
    const runFunc = () => {
        props.func(props.id);
        handleClose();
    }
    return (
        <Modal show={true} onHide={handleClose} animation={true}>
            <Modal.Header style={{ background: "white", display: "flex", justifyContent: "center" }}>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
    <Modal.Body style={{ background: "white", textAlign: "center", direction:"rtl" }}>{props.msg}</Modal.Body>
            <Modal.Footer style={{ background: "white", justifyContent: "space-around" }}>
                <Button variant="dark" onClick={handleClose}>
                    לא
                </Button>
                <Button variant="success" onClick={() => runFunc()}>
                    כן
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteModal;