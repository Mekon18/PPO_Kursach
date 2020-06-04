import React, { Component } from 'react';
import CardComponent from '../components/Card'
import { CardDeck, Nav } from 'react-bootstrap'
import axios from 'axios';

import miha from '../components/docIcons/2.jpg';
import sveta from '../components/docIcons/4.jpg';

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
                {people.map(person => <CardComponent image={person.Id == 2 ? miha : sveta} title={<Nav.Link href={"/profile/" + person.Id}>{person.Name}</Nav.Link>} text={person.Speciality} />)}
            </CardDeck>
        );
    }
}
export default Doctors;

