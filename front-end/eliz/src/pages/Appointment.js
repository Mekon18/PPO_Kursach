import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import AppointForm from '../components/AppointForm'
import Footer from '../components/Footer'

export default class About extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center mt-5 mb-2">На этой странице вы можете записаться на приём к врачу</h2>
                <AppointForm></AppointForm>
                <Footer/>
            </Container>
        )
    }
}