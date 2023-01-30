import React from "react";
import UserHeader from "../components/userHeader.js";
import { Button, Card, ListGroup, Row, Col, Container } from "react-bootstrap";

const Gigs = () => {
    return(
        <div>
            <UserHeader/>
            <Container>
                <Row>
                    <Col sm="9">
                        <h1 className="font">Gigs</h1>
                    </Col>
                    <Col><a href="/create-gig"><Button className="Creategig" variant="success">CREATE A NEW GIGS</Button></a></Col>
                </Row>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col sm="4"><b>Gig</b></Col>
                                <Col sm="2"><b>IMPERESSIONS</b></Col>
                                <Col sm="2"><b>CLICK</b></Col>
                                <Col sm="2"><b>ORDERS</b></Col>
                                <Col sm="2"><b>CANCELLATION</b></Col>
                            </Row>
                        </ListGroup.Item>
                        <div>
                            <ListGroup.Item>
                                <Row>
                                    <Col sm="1">
                                        <img alt="img" width="30" height="30" src="images/userimg1.png"/>
                                    </Col>
                                    <Col sm="3">Title</Col>
                                    <Col sm="2">0</Col>
                                    <Col sm="2">0</Col>
                                    <Col sm="2">0</Col>
                                    <Col sm="2">0</Col>
                                </Row>
                            </ListGroup.Item>
                        </div>
                    </ListGroup>
                </Card>
            </Container>
        </div>
    )
}
export default Gigs