import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

function CardComponent({ title, text, image }) {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image} alt="фото"/>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    );
}

export default CardComponent;