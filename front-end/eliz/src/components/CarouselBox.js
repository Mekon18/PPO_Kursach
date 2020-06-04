import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import doctor1 from '../assets/doctor1.jpg'
import doctor2 from '../assets/doctor2.jpg'
import doctor3 from '../assets/doctor3.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <>
                <Carousel className="mt-5 mb-4">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Лучшие врачи</h1>
                            <p>Наши специалисты являются экспертами в своих областях</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Мы надёжны</h1>
                            <p>Работаем для вас с 2010 года</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>У нас уютно как дома</h1>
                            <p>Мы сделали всё, чтобы вы чувствовали себя комфортно</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel >
            </>
        );
    }
}