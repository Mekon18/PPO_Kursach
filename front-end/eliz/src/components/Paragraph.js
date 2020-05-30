import React, { Component } from 'react'
import { Media, Row, Col } from 'react-bootstrap'

function Paragraph({ title, text }) {
    return (
        <>
            <Row>
                <Col>
                    <Media>
                        <Media.Body>
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </Media.Body>
                    </Media>

                </Col>
            </Row>
        </>

    );
}

export default Paragraph;