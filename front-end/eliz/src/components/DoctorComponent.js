import { Component } from "react";
import { CardComponent } from '../components/Card'
import { CardDeck } from 'react-bootstrap'

class Doctors extends Component {
    state = {
        result: {}
    }

    componentDidMount() {
        fetch('https://localhost:44391/Home/GetDoctors')
            .then(res => res.json())
            .then(result => this.SetDoctors(result))
            .catch(error => error);
    }

    setDoctors = result => {
        this.setState({ result });
    }

    render() {
        const {hits=[]} = result
        return(
            <CardDeck>
                {hits.map(({Name, Specialty}))} =>
                <CardComponent
                    title={Name}
                    text={Specialty}
                />
            </CardDeck>
        );
    }
}

