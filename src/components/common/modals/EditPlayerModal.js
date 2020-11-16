import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditUser from '../../admin/components/EditUser';

const EditPlayerModal = (props) => {

    const handleClose = () => { props.closeModal(false); };
    return (
        <Modal show={true} onHide={handleClose} animation={true}>
            <EditUser data={props.data} team={props.team} handleClose={handleClose} render={props.render} />
        </Modal>
    );
}
export default EditPlayerModal;