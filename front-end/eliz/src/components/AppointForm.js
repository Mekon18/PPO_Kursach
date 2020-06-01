import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';


class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            people: [],
            departments: [],
            time: [],
            selectedDepartment: undefined,
            selectedDoctor: undefined,
            selectedDay: undefined,
            selectedTime: undefined
        }
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.selectDoctorChangeHandler = this.selectDoctorChangeHandler.bind(this);
        this.handeInputChange = this.handeInputChange.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectTimeChangeHandler = this.selectTimeChangeHandler.bind(this);
    }

    handleDayClick(day, { selected }) {
        if (selected) {
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day.toLocaleDateString().split('.').join('-') });
        if (this.state.selectedDoctor !== undefined && this.state.selectedDay !== undefined) {
            axios.get('https://localhost:44391/Home/GetAllowedTime?date=' + this.state.selectedDay + '&doctorId=' + this.state.selectedDoctor)
                .then(res => {
                    const times = res.data;
                    this.setState({ time: times });
                    this.setState({ selectedTime: times[0].time })
                })
        }
    }

    handeInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.selectedDay);
        console.log(this.state.selectedDoctor);
        console.log(this.state.selectedTime);
        axios.post('https://localhost:44391/Home/AddRegistration?DoctorId=' 
        + this.state.selectedDoctor 
        + '&ServiceId=' + 0 + '&UserName=' + this.state.name 
        + '&Date=' + this.state.selectedDay + '&time=' + this.state.selectedTime);
    }

    componentDidMount() {
        axios.get(`https://localhost:44391/Home/GetDepartments`)
            .then(res => {
                const departments = res.data;
                this.setState({ departments: departments });
            })
    }

    selectChangeHandler(event) {
        this.setState({ selectedDepartment: event.target.value });
        console.log(this.state.selectedDepartment);
        axios.get(`https://localhost:44391/Home/GetDepartmentsDoctors/` + event.target.value)
            .then(res => {
                const people = res.data;
                this.setState({ people: people });
            })
    }

    selectDoctorChangeHandler(event) {
        this.setState({ selectedDoctor: event.target.value });
        console.log(this.state.selectedDoctor);
    }

    selectTimeChangeHandler(event) {
        this.setState({ selectedTime: event.target.value });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control placeholder="ФИО" name="name" value={this.state.name} onChange={this.handeInputChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value={this.state.selectedDepartment} onChange={this.selectChangeHandler}>
                            {this.state.departments.map(department => <option value={department.Id}>{department.Name}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value={this.state.selectedDoctor} onChange={this.selectDoctorChangeHandler}>
                            {this.state.people.map(person => <option value={person.Id}>{person.Name}</option>)}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" value={this.state.selectedTime} onChange={this.selectTimeChangeHandler}>
                            {this.state.time.map(time => <option value={time.time}>{time.time}</option>)}
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