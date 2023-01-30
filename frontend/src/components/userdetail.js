import React from "react";
import {Container, Col ,Row} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
const Userdetail = () => {
    return(
        <div className="userdetail">
            <div className="userinfo">
                <Container>
                    <Row>
                        <Col xs lg="3">
                            <img width="60px" height="60px" alt="userimage" src="images/userimg1.png"/>
                        </Col>
                        <Col xs lg="6">
                            <h5>Aizaz</h5>
                        </Col>
                        <Col xs lg="3">
                            <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100">N/A</FontAwesomeIcon>
                        </Col>
                    </Row>
                    <br/>
                    <div className="line"></div>
                    <Row>
                        <Col xs lg="10">Response Rate</Col>
                        <Col xs lg="2">100%</Col>
                    </Row>
                    <Row>
                        <Col xs lg="10">Delivered on time</Col>
                        <Col xs lg="2">100%</Col>
                    </Row>
                    <Row>
                        <Col xs lg="10">Order Completion</Col>
                        <Col xs lg="2">100%</Col>
                    </Row>
                    <div className="line"></div>
                    <Row>
                        <Col xs lg="10">Earned in Feb</Col>
                        <Col xs lg="2">$1000</Col>
                    </Row>
                    <Row>
                        <Col xs lg="10">Response Time</Col>
                        <Col xs lg="2">5Hrs</Col>
                    </Row>
                </Container>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}
export default Userdetail