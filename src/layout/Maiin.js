import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/header/Header';
import Foot from '../pages/shared/footer/Foot';

const Maiin = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                    {/* <Col  lg="3">
                    <h2>left side </h2>
                    </Col> */}

                    <Col>
                    <Outlet></Outlet>
                    </Col>
                </Row>
            <Foot></Foot>                
        </div>
    );
};

export default Maiin;