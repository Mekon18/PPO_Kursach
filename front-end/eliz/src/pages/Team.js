import React, { Component } from 'react';
import Doctors from '../components/DoctorComponent'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'

export default class Team extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="tabs" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Какое-то отделение</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Doctors />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Container>
        )
    }
}