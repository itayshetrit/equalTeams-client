import React from 'react';
import Modal from 'react-bootstrap/Modal';
import AddUser from '../../admin/components/AddUser';

const AddPlayerModal = (props) => {

    const handleClose = () => { props.closeModal(false); };
    return (
        <Modal show={true} onHide={handleClose} animation={true}>
            <AddUser team={props.team} handleClose={handleClose} render={props.render} />
        </Modal>
    );
}
export default AddPlayerModal;