import React, { useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser,updateUserProfile,emailVerify } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateProfile(name, photoURL);
                handleEmailVerify();
                toast.success('please verify your email address before login')
            })
            .catch(error => {
                {
                    console.error('error', error)
                    setError(error.message)
                };
            })

    }

    const handleUpdateProfile=(name, photoURL)=>{
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{

        })
        .catch(()=>{
            console.error(error);
        })
    }

    const handleAccepted=event=>{
        setAccepted(event.target.checked)
    }
    const handleEmailVerify=()=>{
        emailVerify()
        .then(()=>{

        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photoURL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Enter Photo Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 

                type="checkbox" 
                onClick={handleAccepted}
                label={<>Accepts <Link to='/terms'>terms and conditions</Link> </>} />

            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            {error}
        </Form>
    );
};

export default Register;