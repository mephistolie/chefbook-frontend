import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../index.css";

const Home = () => {
    const isMobile = window.innerWidth <= 1024;

    let containerClass = "overflow-hidden";
    let containerStyle = {maxHeight: 'calc(100vh - 128px)'}
    if (isMobile) {
        containerClass = ""
        containerStyle = {}
    }
    return (
        <Container className={containerClass} style={containerStyle}>
            <Row className="justify-content-between" style={{marginTop: "64px"}}>
                <Col md={5} style={{marginTop: "96px"}}>
                    <p className="header1">Your personal Recipe Book here</p>
                    <p className="header2 foreground-secondary-color" style={{marginTop: "32px"}}>
                        Android Open Source Recipe Book & Purchases App with data encryption
                    </p>
                    <table style={{marginTop: "96px", marginBottom: "64px", width: "100%"}}>
                        <tbody>
                        <tr>
                            <td style={{width: "50%"}}>
                                <a href="https://play.google.com/store/apps/details?id=com.cactusknights.chefbook">
                                    <button className="btn-primary" style={{marginRight: "10px"}}>Google Play
                                    </button>
                                </a>
                            </td>
                            <td style={{width: "50%"}}>
                                <a href="https://github.com/mephistolie/chefbook">
                                    <button className="btn-secondary" style={{marginLeft: "10px"}}>GitHub
                                    </button>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={5} style={{marginBottom: "64px"}}>
                    <img src="./screenshot.png" alt={"ChefBook Screenshot"} width="100%"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
