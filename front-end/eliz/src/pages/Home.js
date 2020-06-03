import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/CarouselBox'
import { Container, CardDeck, Col, Row, Jumbotron, Button, Modal } from 'react-bootstrap';
import CardComponent from '../components/Card'
import Services from '../components/Services'
import ModalAppoint from '../components/ModalAppoint'

import Footer from '../components/Footer'
import best from '../assets/best.jpg'
import eq from '../assets/equipment.jpg'
import practises from '../assets/practises.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel />
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-4">Коротко о нас</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <p>
                                Медицинский центр «Элизабет» - это сочетание истории, передовых технологий в медицине, новейшего оборудования, высококвалифицированных медицинских работников и комфорта. Так, «Элизабет» представляет собой два филиала, расположенных в центральной исторической части города Могилева по переулку Тани Карпинской, д.10а и переулку Коммунистическому, д.7.
                            </p>
                        </Col>
                        <Col>
                            <p>
                                Наши специалисты постоянно развиваются, повышают свой профессиональный уровень не только в Республике Беларусь, но и за рубежом. Сотрудники «Элизабет» регулярно участвуют в международных научных конференциях и съездах. Это позволяет нашим врачам получить навыки и технологии, которые успешно и эффективно применяются на современном высокотехнологичном оборудовании, установленном в центре.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="mb-4">Направления</h2>
                        </Col>
                    </Row>
                    <Services />
                    <Row className="mt-4">
                        <Col>
                            <h2 className="mb-4">Почему стоит выбрать нас?</h2>
                        </Col>
                    </Row>
                    <CardDeck className="m-4">
                        <CardComponent
                            image={practises}
                            title="Мы надежны"
                            text="Работаем с 2010 года"
                        />
                        <CardComponent
                            image={best}
                            title="Лучшие врачи"
                            text="Каждый является экспертом в своей области"
                        />
                        <CardComponent
                            image={eq}
                            title="Современное оборудование"
                            text="Нужно как-то закончить эту пару"
                        />
                    </CardDeck>
                    <Row>
                        <Col>
                            <h2 className="mb-4 text-center">Записыватесь на приём прямо сейчас</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mb-5">
                            <ModalAppoint />
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </>
        )
    }
}