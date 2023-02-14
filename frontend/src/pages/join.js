import React from "react";
import {Form,Button} from 'react-bootstrap';
import Axios from "axios";
import {useNavigate} from 'react-router-dom'
const JoinForm = () => {
    const history = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setname] = React.useState("");
    const [buyer, setbuyer] = React.useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(email, password, name, buyer);
        const user = Axios.post("http://localhost:5000/user/register", {
            email,
            password,
            name,
            buyer
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                history('/signin')
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
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="Name" placeholder="Choose a name"
                    
                    onChange={(e) => setname(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Set a Password"
            
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <div className="nbv">
                    <Form.Check custom type="checkbox" id="checkbox9" placeholder="Choose a name"
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