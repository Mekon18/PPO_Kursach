import React from "react";
import { ModalFooter, Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <ModalFooter>
            <Row>
                <Col lg={4}>
                    <h6 >Телефоны:</h6>
                    <ul>
                        <li>+ 999 (99) 999-99-99</li>
                        <li>+ 999 (99) 999-99-99</li>
                        <li>+ 999 (99) 999-99-99</li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <h6 >Электронная почта:</h6>
                    <ul>
                        <li>email@gmail.com</li>
                        <li>email@gmail.com</li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <h6 >Адреса:</h6>
                    <ul>
                        <li>улица Пушкина, дом Калатушкина</li>
                        <li>Красная площадь</li>
                    </ul>
                </Col>
            </Row>

        </ModalFooter>
    );
}

export default Footer;