import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';


class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            people: [],
            departments: [],
            selectedDepartment: '',
            selectedDoctor: '',
            selectedDay: ''
        }
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(day, { selected }) {
        if (selected) {
          // Unselect the day if already selected
          this.setState({ selectedDay: undefined });
          return;
        }
        this.setState({ selectedDay: day });
      }

    handeInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value,
        })
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const departments = res.data;
                this.setState({ departments: departments });
            })
    }

    selectChangeHandler(event) {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const people = res.data;
                this.setState({ people: people });
            })
        this.setState({ selectedDepartment: event.target.value });
        console.log(this.state.selectedDepartment);
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control placeholder="ФИО" name="name" value={this.state.inputText} onChange={this.handeInputChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value={this.state.selectedDepartment} onChange={this.selectChangeHandler}>
                            {this.state.departments.map(department => <option value={department.id}>{department.id}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value={this.state.selectedDoctor}>
                            {this.state.people.map(person => <option value={person.id}>{person.userId}</option>)}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} />
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