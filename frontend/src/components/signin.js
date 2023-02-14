import React, {useState,useEffect} from "react";

import {useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import Axios from "axios";
const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
//  const dispatch = useDispatch();
//  const userogin =  useSelector(state=>state.userlogin)
//  const {loading,error,userinfo} = userogin;
 let history = useNavigate();

 useEffect(()=>{
   const user= localStorage.getItem('userInfo')
    if(user){
        if(user.buyer){
            history('/user-buyer')
        }else{
            history('/user')
        }
    }
    },[history])

 const submitHandler = (e) =>{
    e.preventDefault()
    try{
        fetch('http://localhost:5000/user/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                localStorage.setItem('userInfo',JSON.stringify(data))
                if(data.buyer){
                    history('/user-buyer')
                }else{
                    history('/user  ')
                }
            }
        })

    }catch(error){
        console.log(error)
    }
        
 }
    return (
        <div>
            <Form
            onSubmit={submitHandler}
            >
                <h4>Sign in to Elance</h4>
                <Form.Group
                controlId="fromBasicEmail">
                    <Form.Control type="email" placeholder="Email/Username" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                controlId="fromBasicPassword">
                    <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                {/* {loading && <h5>....loading</h5>}
                {error && <h5>{error}</h5>} */}
                <Button variant="success" size="md" block type="submit" >Submit</Button>
            </Form>
        </div>
    )
}

export default SigninForm