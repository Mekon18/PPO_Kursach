import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/CarouselBox'
import { Container, CardDeck, Col, Row } from 'react-bootstrap';
import CardComponent from '../components/Card'
import Paragraph from '../components/Paragraph'

import best from '../assets/best.jpg'
import eq from '../assets/equipment.jpg'
import practises from '../assets/practises.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel/>
                <Container>
                    <Row>
                        <Col>
                            <Paragraph
                                title="Что мы из себя представляем"
                                text="Медицинский центр «Элизабет» - это сочетание истории, 
                        передовых технологий в медицине, новейшего оборудования, высококвалифицированных 
                        медицинских работников и комфорта. Так, «Элизабет» представляет собой два филиала, 
                        расположенных в центральной исторической части города Могилева по переулку 
                        Тани Карпинской, д.10а и переулку Коммунистическому, д.7."
                            />
                            <Paragraph
                                title="Вы почувствуюете себя как дома"
                                text="Интерьер фасадов зданий и их помещений 
                        стирают привычное восприятие поликлиник и больниц, 
                        создают комфорт, уют и спокойствие. Для удобства клиентов 
                        филиалы обустроены автомобильными парковками."
                            />
                            <Paragraph
                                title="Мы постоянно совершенствуемся"
                                text="Наши специалисты постоянно развиваются, 
                        повышают свой профессиональный уровень не только в Республике Беларусь, 
                        но и за рубежом. Сотрудники «Элизабет» регулярно участвуют в международных 
                        научных конференциях и съездах. Это позволяет нашим врачам получить навыки и 
                        технологии, которые успешно и эффективно применяются на современном высокотехнологичном 
                        оборудовании, установленном в центре."
                            />
                        </Col>
                    </Row>
                    <h2 className="text-center m-4">Почему стоит выбрать нас?</h2>
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

                </Container>
            </>
        )
    }
}