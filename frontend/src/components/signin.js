import React from "react";
import {Form, Button} from 'react-bootstrap'
const SigninForm = () => {
    return (
        <div>
            <Form>
                <h4>Sign in to Elance</h4>
                <Form.Group
                controlId="fromBasicEmail">
                    <Form.Control type="email" placeholder="Email/Username"/>
                </Form.Group>
                <Form.Group
                controlId="fromBasicPassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="success" size="md" block type="submit" >Submit</Button>
            </Form>
        </div>
    )
}

export default SigninForm