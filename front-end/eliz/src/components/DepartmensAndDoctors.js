import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';
import Doctors from '../components/DoctorComponent'

class DepartmentsAndDoctors extends Component {

    constructor(props) {
        super(props)
        this.state = { departments: [] }
    }

    componentDidMount() {
        console.log(this.props.departmentId)
        axios.get(`https://localhost:44391/Home/GetDepartments`)
            .then(res => {
                const departments = res.data;
                console.log(departments)
                this.setState({ departments: departments });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.departments.map(department =>
                        <div>
                            <Row>
                                <h2>{department.Name}</h2>
                            </Row>
                            <Row>
                                <Col lg={3}>
                                    <Doctors departmentId={department.Id} />
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default DepartmentsAndDoctors;