import React, {memo, useMemo} from 'react';
import {Col, Container, Navbar} from "react-bootstrap";
import "./Header.css";
import {EULA_ROUTE, HOME_ROUTE, PRIVACY_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const MemoizedLogo = React.memo(function MemoizedLogo({}) {
    return <img className="d-inline-block align-top" src="./logo192.png" alt={"ChefBook Logo"}
                height="28px"/>;
})

const Header = () => {
    return (
        <Navbar fixed="top" className={"header justify-content-center"}>
            <Container>
                <Col md={4}>
                    <NavLink to={HOME_ROUTE}>
                        <MemoizedLogo/>
                        <span className="logo" style={{marginLeft: "4px"}}>Chef<span
                            className="tint-color">Book</span></span>
                    </NavLink>
                </Col>
                <Col md={5} className="text-end">
                    <NavLink to={HOME_ROUTE}><span className="tab align-middle">HOME</span></NavLink>
                    <NavLink to={EULA_ROUTE} style={{marginLeft: "20px"}}><span className="tab align-middle">EULA</span></NavLink>
                    <NavLink to={PRIVACY_ROUTE} style={{marginLeft: "20px"}}><span className="tab align-middle">PRIVACY POLICY</span></NavLink>
                </Col>
            </Container>
        </Navbar>
    );
};

export default Header;