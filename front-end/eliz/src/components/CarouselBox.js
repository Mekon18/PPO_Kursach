import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import doctor1 from '../assets/doctor1.jpg'
import doctor2 from '../assets/doctor2.jpg'
import doctor3 from '../assets/doctor3.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="mb-4">
                <Carousel.Item>
                    <Image className="d-block w-100" src={doctor1} alt="доктор1" />
                    <Carousel.Caption>
                        <h3>Заголовок1</h3>
                        <p>текст для картинки1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={doctor2} alt="доктор2" />
                    <Carousel.Caption>
                        <h3>Заголовок2</h3>
                        <p>текст для картинки2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100" src={doctor3} alt="доктор3" />
                    <Carousel.Caption>
                        <h3>Заголовок2</h3>
                        <p>текст для картинки2</p>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
        )
    }
}