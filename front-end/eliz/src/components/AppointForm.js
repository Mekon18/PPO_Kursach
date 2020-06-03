import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap'
import axios from 'axios'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';


class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            surname: undefined,
            fathername: undefined,
            people: [],
            departments: [],
            time: [],
            services: [],
            selectedDepartment: undefined,
            selectedDoctor: undefined,
            selectedDay: undefined,
            selectedTime: undefined,
            selectedService: undefined
        }
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.selectDoctorChangeHandler = this.selectDoctorChangeHandler.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectTimeChangeHandler = this.selectTimeChangeHandler.bind(this);
        this.selectServiceChangeHandler = this.selectServiceChangeHandler.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleSurnameInputChange = this.handleSurnameInputChange.bind(this);
        this.handleFatherNameInputChange = this.handleFatherNameInputChange.bind(this);
    }

    handleDayClick(day, { selected }) {
        if (selected) {
          this.setState({ selectedDay: undefined });
          return;
        }
        this.setState({ selectedDay: day });
        if (this.state.selectedDoctor !== undefined && this.state.selectedDay !== undefined) {
            axios.get('https://localhost:44391/Home/GetAllowedTime?date=' + this.state.selectedDay.toLocaleDateString().split('.').join('-') + '&doctorId=' + this.state.selectedDoctor)
                .then(res => {
                    const times = res.data;
                    this.setState({ time: times });
                    this.setState({ selectedTime: times[0].time })
                })
        }
    }

    handleNameInputChange = ({ target: { value } }) => {
        this.setState({
            name: value
        })
    }

    handleSurnameInputChange = ({ target: { value } }) => {
        this.setState({
            surname: value
        })
    }

    handleFatherNameInputChange = ({ target: { value } }) => {
        this.setState({
            fathername: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.name + ' ' + this.state.surname + ' ' + this.state.fathername);
        console.log(this.state.selectedDay.toLocaleDateString().split('.').join('-'));
        console.log(this.state.selectedDoctor);
        console.log(this.state.selectedTime);
        console.log(this.state.selectedService);
        axios.post('https://localhost:44391/Home/AddRegistration?'
            + 'DoctorId=' + this.state.selectedDoctor
            + '&ServiceId=' + this.state.selectedService + '&UserName=' + this.state.name + ' ' + this.state.surname + ' ' + this.state.fathername
            + '&Date=' + this.state.selectedDay.toLocaleDateString().split('.').join('-')
            + '&time=' + this.state.selectedTime);
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
                this.setState({selectedDoctor: people[0].Id})
            })
        axios.get(`https://localhost:44391/Home/GetDepartmentsServices/` + event.target.value)
            .then(res => {
                const services = res.data;
                this.setState({ services: services });
                this.setState({selectedService: services[0].Id})
            })
    }

    selectDoctorChangeHandler(event) {
        this.setState({ selectedDoctor: event.target.value });
        console.log(this.state.selectedDoctor);
    }

    selectServiceChangeHandler(event) {
        this.setState({ selectedService: event.target.value });
        console.log(this.state.selectedService);
    }

    selectTimeChangeHandler(event) {
        this.setState({ selectedTime: event.target.value });
    }

    render() {
        return (
            <Row className="mb-4">
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <h5>ФИО:</h5>
                        <Form.Row>
                            <Col lg={4}>
                                <Form.Group controlId="formGridName">
                                    <Form.Control placeholder="Имя" name="name" value={this.state.name} onChange={this.handleNameInputChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control placeholder="Фамилия" name="surname" value={this.state.surname} onChange={this.handleSurnameInputChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control placeholder="Отчество" name="fathername" value={this.state.fathername} onChange={this.handleFatherNameInputChange} />
                                </Form.Group>
                            </Col>


                        </Form.Row>
                        <Form.Row>
                            <Col lg={4}>
                                <Form.Group controlId="formGridState">
                                    <h5>Выберите отделение:</h5>
                                    <Form.Control as="select" value={this.state.selectedService} onChange={this.selectChangeHandler}>
                                        {this.state.departments.map(department => <option value={department.Id}>{department.Name}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group controlId="formGridState">
                                    <h5>Выберите услугу:</h5>
                                    <Form.Control as="select" value={this.state.selectedDepartment} onChange={this.selectServiceChangeHandler}>
                                        {this.state.services.map(service => <option value={service.Id}>{service.Name}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group controlId="formGridState">
                                    <h5>Выберите врача:</h5>
                                    <Form.Control as="select" value={this.state.selectedDoctor} onChange={this.selectDoctorChangeHandler}>
                                        {this.state.people.map(person => <option value={person.Id}>{person.Name}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Col>
                                <h5>Выберите дату:</h5>
                                <Form.Group as={Col} controlId="formGridState">
                                    <DayPicker onDayClick={this.handleDayClick} selectedDay={this.state.selectedDay} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <h5>Выберите время:</h5>
                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control as="select" value={this.state.selectedTime} onChange={this.selectTimeChangeHandler}>
                                        {this.state.time.map(time => <option value={time.time}>{time.time}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Записаться
                </Button>
                    </Form >
                </Col>
            </Row>
        );
    }
}

export default AppointmentForm;