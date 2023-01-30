import React from "react";
import {Form,Button} from 'react-bootstrap';
const JoinForm = () => {
    return (
        <div className="logonform">
            <Form>
                <h3>Sign in to Elance</h3>
                <br></br>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="Name" placeholder="Choose a Username"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Set a Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <div className="nbv">
                    <Form.Check custom type="checkbox" id="checkbox9" placeholder="Choose a Username"/>
                    <p>Join as a Buyer</p>
                    </div>
                    <Button variant="success" size="md" block type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default JoinForm