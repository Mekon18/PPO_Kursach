import React, { Component } from 'react';
import axios from 'axios';

import miha from '../components/docIcons/2.jpg';
import sveta from '../components/docIcons/4.jpg';
import { Container, Row, Col } from 'react-bootstrap'


class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        axios.get(`https://localhost:44391/Home/GetDoctor/` + this.props.match.params.id)
            .then(res => {
                const user = res.data;
                console.log(user);
                this.setState({ user: user });
            })

    }

    render() {
        if (!this.state.user) {
            return <div>загрузка</div>
        }
        console.log(this.state.user)
        return (
            <>
                <Container>
                    <Row className="mt-5 p-3">
                        <Col lg={6}>
                            <img src={this.props.match.params.id == 2 ? miha : sveta} width={275} />
                        </Col>
                        <Col lg={6}>
                            <h2 className="text-center">{this.state.user.Name}</h2>
                            <h5>Специальность:</h5> <span className="d-block">{this.state.user.Specialty}</span>
                            <h5>Категория:</h5> <span className="d-block">{this.state.user.Category}</span>
                            <h5>Стаж:</h5> <span className="d-block">c {this.state.user.Experience} г.</span>
                            <h5>Опыт работы:</h5>
                            <ul>
                                {this.state.user.Experiences.map(person => <li>{person.BeginningString} - {person.EndingString}: {person.Name}</li>)}
                            </ul>
                            <h5>Дополнительная квалификация:</h5>
                            <ul>
                                {this.state.user.AdditionalEducations.map(person => <li>{person.EndingString}: {person.Name}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default ProfileContainer;

