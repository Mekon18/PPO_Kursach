import React, { Component } from 'react';
import CardComponent from '../components/Card'
import { CardDeck } from 'react-bootstrap'
import axios from 'axios';

class Doctors extends Component {

    constructor(props) {
        super(props)
        this.state = { departmentId: 1, people: [] }
    }

    componentDidMount() {
        console.log(this.props.departmentId)
        axios.get(`https://localhost:44391/Home/GetDepartmentsDoctors/` + this.props.departmentId)
            .then(res => {
                const people = res.data;
                this.setState({ people: people });
            })
    }

    render() {
        const people = this.state.people;
        return (
            <CardDeck>
                {people.map(person => <CardComponent title={person.title} text={person.userId} />)}
            </CardDeck>
        );
    }
}
export default Doctors;

