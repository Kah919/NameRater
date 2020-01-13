import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ErrorModal extends Component {

    render() {
        return(
            <div>
                <Modal isOpen={ this.props.isOpen } toggle={ this.props.stopModal }>
                    <ModalHeader toggle={this.toggle}> ERROR 404 </ModalHeader>
                    <ModalBody>
                        Please don't use any special characters and only use your first name.
                    </ModalBody>
                    <Button color="dark" onClick={ this.props.stopModal }> X </Button>
                </Modal>
            </div>
        )
    }
}

export default ErrorModal;