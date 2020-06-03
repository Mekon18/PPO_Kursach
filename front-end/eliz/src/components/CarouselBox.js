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
                            <h1>First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Second slide label</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Third slide label</h1>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel >
            </>
        );
    }
}