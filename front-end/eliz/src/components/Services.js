import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap'
import nevrologic from '../components/depIcons/1.png'
import ortopedic from '../components/depIcons/3.png'

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
                {this.state.services.map(service => <Col md={4}><div className="text-center"><img src={service.Id == 1 ? nevrologic : ortopedic} className="mr-4" /><h6>{service.Name}</h6></div></Col>)}
            </Row>
        );
    }
}
export default Services;
