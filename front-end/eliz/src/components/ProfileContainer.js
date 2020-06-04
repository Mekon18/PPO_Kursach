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
                    <Row className="mt-5">
                        <Col lg={6}>
                            <img src={this.props.match.params.id == 2 ? miha : sveta} width={275} />
                        </Col>
                        <Col lg={6}>
                            <h2 className="text-center">{this.state.user.Name}</h2>
                            <span><b>Специальность:</b> {this.state.user.Specialty}</span>
                            <span><b>Категория:</b> {this.state.user.Category}</span>
                            <span><b>Стаж:</b> c {this.state.user.Experience} г.</span>
                            <h3>Опыт работы:</h3>
                            <ul>
                                {this.state.user.Experiences.map(person => <li>{person.Begging} - {person.Ending}: {person.Name}</li>)}
                            </ul>
                            <h3>Дополнительная квалификация:</h3>
                            <ul>
                                {this.state.user.AdditionalEducations.map(person => <li>{person.Ending}: {person.Name}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default ProfileContainer;

