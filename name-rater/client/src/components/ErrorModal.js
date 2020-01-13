import React, { Component } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';

class ErrorModal extends Component {

    render() {
        return(
            <div>
                <Modal isOpen={ this.props.isOpen } toggle={ this.props.stopModal }>
                    <ModalHeader toggle={this.toggle}> Hmmm... please only include alphabets </ModalHeader>
                    <Button color="dark" style={{marginBottom: '2rem'}} onClick={ this.props.stopModal }> X </Button>
                </Modal>
            </div>
        )
    }
}

export default ErrorModal;