import React from "react";
import {Form,Button} from 'react-bootstrap';
const JoinForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [buyer, setbuyer] = React.useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("userName", userName);
        data.append("buyer", buyer);
        fetch("http://localhost:5000/user/register", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            );
    }


    return (
        <div className="logonform">
            <Form
                onSubmit={SubmitHandler}
            >
                <h3>Sign in to Elance</h3>
                <br></br>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="Name" placeholder="Choose a Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Set a Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <div className="nbv">
                    <Form.Check custom type="checkbox" id="checkbox9" placeholder="Choose a Username"
                    // value={buyer}
                    onChange={(e) => setbuyer(!buyer)}

                    />
                    <p>Join as a Buyer</p>
                    </div>
                    <Button variant="success" size="md" block type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default JoinForm