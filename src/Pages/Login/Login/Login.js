import { Toast } from 'bootstrap';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error,setError]= useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {signIn, setLoading}= useContext(AuthContext)
    const navigate = useNavigate();

const handleSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        if(user.emailVerified){
            navigate(from,{replace: true});
        }
        else{
            toast.error('your email is not verified.please')
        }

    })
    .catch(error=>{
        {
            console.error(error);
            setError( error.message)
        }
    })
    .finally(()=>{
        setLoading(false);
    })


}

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            {error}
        </Form>
    );
};

export default Login;