import React, {useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../action/userAction.js'
import {useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 const dispatch = useDispatch();
 const userogin =  useSelector(state=>state.userlogin)
 const {loading,error,userinfo} = userogin;
 let history = useNavigate();

 useEffect(()=>{
    if(userinfo){
        if(userinfo.isBuyer===true){
            history('/user-buyer')
        }
        else{
            history('/user')
        }
    }
 },[history,userinfo])

 const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(login(email,password))
 }
    return (
        <div>
            <Form onSubmit={submitHandler}>
                <h4>Sign in to Elance</h4>
                <Form.Group
                controlId="fromBasicEmail">
                    <Form.Control type="email" placeholder="Email/Username" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group
                controlId="fromBasicPassword">
                    <Form.Control type="password" placeholder="Password"
                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                {loading && <h5>....loading</h5>}
                {error && <h5>{error}</h5>}
                <Button variant="success" size="md" block type="submit" >Submit</Button>
            </Form>
        </div>
    )
}

export default SigninForm