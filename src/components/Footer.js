import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className="Footer">
            <Link to='#header_top'>
            <div className="Footer-backToTop">
                <p>Back to top</p>
                </div>
            </Link>
            <Container>
             <Row>
                <Col className="Foot_col" xs>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eius, ea quas, odio saepe labore provident culpa cupiditate in illum debitis temporibus? Consequatur amet, ullam reprehenderit sint obcaecati expedita autem.</Col>
                <Col className="Foot_col" xs={{ order: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eius, ea quas, odio saepe labore provident culpa cupiditate in illum debitis temporibus? Consequatur amet, ullam reprehenderit sint obcaecati expedita autem.</Col>
                <Col className="Foot_col" xs={{ order: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eius, ea quas, odio saepe labore provident culpa cupiditate in illum debitis temporibus? Consequatur amet, ullam reprehenderit sint obcaecati expedita autem.</Col>
              </Row>
            </Container>
            <hr/>
            <p className="Foot_copyright">© 1996-2020, Amazon.com</p>
        </div>
    )
}

export default Footer
