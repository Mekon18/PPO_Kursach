import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap'

class Services extends Component {

    constructor(props) {
        super(props)
        this.state = { services: [] }
    }

    componentDidMount() {
        axios.get(`https://localhost:44391/Home/GetDepartments`)
            .then(res => {
                const services = res.data;
                this.setState({ services: services });
            })
    }

    render() {
        return (
            <Row>
                {this.state.services.map(service => <Col md={4}><div className="text-center"><img src={"depIcons/" + service.Id + ".png"} className="mr-4" /><h6>{service.Name}</h6></div></Col>)}
            </Row>
        );
    }
}
export default Services;
