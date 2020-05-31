import React, { Component } from 'react';
import CardComponent from '../components/Card'
import { CardDeck } from 'react-bootstrap'
import axios from 'axios';

class Doctors extends Component {

    constructor(props) {
        super(props)
        this.state = {departmentId: 1, people: []}
    }

    componentDidMount() {
        console.log(this.props.departmentId)
        axios.get(`https://localhost:44391/Home/GetDoctors?` + this.props.departmentId)
            .then(res => {
                const people = res.data;
                this.setState({ people });
            })
    }

    render() {
        return (
            <CardDeck>
                {this.state.people.map(person => <CardComponent title={person.Nitle} text={person.Speciality} />)}
            </CardDeck>
        );
    }
}
export default Doctors;

