import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authcontext/Authprovider';

const Register = () => {
    const {createuser,userprofile} = useContext(AuthContext);
    const [error, seterror] =useState('');
    const handlesubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createuser(email, password)
        .then(result => {
            const user  = result.user;
            console.log(user);
            seterror('');
            form.reset();
            handleprofile(name, photoURL);
           
        })
        .catch(e =>{
            console.error(e)
            seterror(e.message);
        });

    }
    const handleprofile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL:photoURL


        }

        userprofile(profile)
        .then(() =>{})
        .catch(error => console.error(error));
    } 

    return (
        <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>your Name</Form.Label>
          <Form.Control name='name' type="name" placeholder="your name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="photo URL" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button className='py-10' variant="primary" type="submit">
          Register
        </Button>
        <Button className='ms-2' variant="info" type="submit">
          <Link to='/login'>Login</Link>
        </Button>
       
      
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
        
  
        
      </Form>
    );
};

export default Register;