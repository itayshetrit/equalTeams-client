import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddUser from '../../admin/components/AddUser';

const DeleteModal = (props) => {

    const handleClose = () => { props.closeModal(null); };
    const runFunc = () => {
        props.func(props.id);
        handleClose();
    }
    return (
        <Modal show={true} onHide={handleClose} animation={true}>
            <AddUser />
        </Modal>
    );
}
export default DeleteModal;