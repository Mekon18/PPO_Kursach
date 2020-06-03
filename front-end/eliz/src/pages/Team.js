import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import DepartmensAndDoctors from '../components/DepartmensAndDoctors'

export default class Team extends Component {
    render() {
        return (
            <Container>
                <div className="mt-5">
                    <DepartmensAndDoctors />
                </div>
            </Container>
        )
    }
}