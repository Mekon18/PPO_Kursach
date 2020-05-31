import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap'
import AppointForm from '../components/AppointForm'

export default class About extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center m-4">На этой странице вы можете записаться на приём к врачу</h2>
                <AppointForm></AppointForm>
            </Container>
        )
    }
}