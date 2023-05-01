import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <Col className="footer mt-auto p-2 justify-content-center" style={{flex: "none"}}>
            <Container style={{height: "100%"}}>
                <Row className="justify-content-between align-items-center" style={{height: "100%"}}>
                    <Col md={4} className="foreground-secondary-color">© Mikhail Levin, 2023</Col>
                    <Col md={4} className="text-end foreground-secondary-color">Made with love for T. I. ♥️</Col>
                </Row>
            </Container>
        </Col>
    );
};

export default Footer;
