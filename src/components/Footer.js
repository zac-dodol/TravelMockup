import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Footer(props) {
    return (
        <footer className="mt-5 footer">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3 footer-logo">
                    <Col className="p-0" md={3} sm={12}>
                        <p>saidinatravel@yahoo.com @ 019-271-8870</p>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end " md={3} sm={12}>

                        <a href="OnlineMe.html"> 2015 © All rights reserved. Z Hazim.</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer

