import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import AppointForm from '../components/AppointForm'

class ModalAppoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Записаться на приём
                </Button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        <Modal.Title>Запись на приём</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AppointForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Отмена
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModalAppoint