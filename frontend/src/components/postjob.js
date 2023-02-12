import React from "react";
import {Button, Form,Col,Container,Row} from 'react-bootstrap'
import BuyerHeader from '../components/buyerheader.js'

const Postjob = () => {
    return(
        <div>
            <BuyerHeader/>
            <Container>
                <Form>
                    <br/>
                    <h3>what service are you looking for?</h3>
                    <br/>
                    <Row>
                        <Col sm="8">
                            <h6>Describe the service you're looking ro purchase - please be as detailed as possible:</h6>
                            <Form.Control as="textarea" rows={5} placeholder="i am looking for...">
                            </Form.Control>
                        </Col>
                    </Row>
                    <br/>
                    <h6>Choose a Category:</h6>
                    <Row>
                        <Col sm="4">
                            <Form.Group as="Col">
                                <Form.Control as="select">
                                    <option>Choose</option>
                                    <option>Programming</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col sm="4">
                            <Form.Group as="Col">
                                <Form.Control as="select">
                                    <option>Advance</option>
                                    <option>Moderate</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    <h6>Once you place your order,when would you like your service delivered?</h6>
                    <Row>
                        <Col>
                        <input type="number" min="1" max="60"/>
                        </Col>
                    </Row>
                    <br/>
                    <h6>what is your budget for this service?</h6>
                    <Row>
                        <Col sm="7">
                            <input type="number" min="5" max="2000"/>$
                        </Col>
                        <Col sm="3">
                            <Button type="submit" variant="success">Post</Button>
                        </Col>
                    </Row>
                    <br/>
                </Form>
            </Container>
        </div>
    )
}
export default Postjob