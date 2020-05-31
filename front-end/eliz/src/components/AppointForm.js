import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'

class AppointmentForm extends Component {
    state = {
        inputText: '',
        departments: []
    }

    handeInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value,
        })
    }

    componentDidMount() {
        axios.get(`https://localhost:44391/Home/GetDepartmens`)
            .then(res => {
                const departments = res.data;
                this.setState({ departments });
            })
    }

    selectChangeHandeler() {
        axios.get(`https://localhost:44391/Home/GetDoctors?` + this.props.departmentId)
            .then(res => {
                const people = res.data;
                this.setState({ people });
            })
    }

    render() {
        const {inputText} = this.state;
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control placeholder="ФИО" name="name" value={inputText} onChange={this.handeInputChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value="отделение">
                            {this.state.departments.map(department => <option value={department.id}>{department.title}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value="доктор">
                            <option>Доктор</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value="отделение">
                            <option>День</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value="отделение">
                            <option>Месяц</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Записаться
                    </Button>
            </Form>
        );
    }
}

export default AppointmentForm;