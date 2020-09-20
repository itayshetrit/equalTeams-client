import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const RemoveModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const modal_del = async (id) => {
        props.func(id)
        handleClose()
    }
    const handleShow = () => setShow(true);
    return (
        <div>
            <div style={{padding:"0"}} onClick={handleShow}>{props.button}</div>

            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor:"white" }}>
                    <Modal.Title style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor:"white" }}>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center", color: "black", direction:"rtl", backgroundColor:"white" }}>{props.msg}</Modal.Body>
                <Modal.Footer style={{ justifyContent: "space-around", backgroundColor:"white" }}>
                    <Button variant="danger" onClick={handleClose}>
                        ביטול
                    </Button>
                    <Button variant="success" onClick={() => modal_del(props.id)}>
                        אישור
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default RemoveModal;

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import '../Style.css'
// const RemoveModal = (props) => {
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
//     const modal_del = async (id) => {
//         props.func(id)
//         handleClose()
//     }
//     return (
//         <div style={{direction:"rtl"}}>
//             <Button color="primary" onClick={handleClickOpen}>
//                 {props.button}
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title" style={{textAlign:"right"}}>{props.title}</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description" style={{direction:"rtl"}}>
//                         {props.msg}
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose} color="primary">
//                         ביטול
//           </Button>
//                     <Button onClick={() => modal_del(props.id)} color="primary" autoFocus>
//                         אישור
//           </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

// export default RemoveModal;