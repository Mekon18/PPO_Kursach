import React, { Component } from 'react';
import CardComponent from '../components/Card'
import { CardDeck } from 'react-bootstrap'

class Doctors extends Component {

    state = {
        result: {},
    }

    componentDidMount() {
        fetch("https://localhost:44391/Home/GetDoctors")
            .then(res => res.json())
            .then(result => this.SetDoctors(result))
            .catch(error => error);
    }

    setDoctors = result => {
        this.setState({ result });
    }

    render() {
        const { result } = this.state
        const { hits = [] } = result
        console.log(result)
        return (
            <CardDeck>
                {hits.map(({ Name, Speciality }) =>
                    <CardComponent
                        title={Name}
                        text={Speciality}
                    />)}
            </CardDeck>
        );
    }
}
export default Doctors;

