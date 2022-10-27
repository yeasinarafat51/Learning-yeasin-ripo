import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../../contexts/authcontext/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, seterror] =useState('');
    const {signin} = useContext(AuthContext)
    const {providerLogin, GitLogin} = useContext(AuthContext);
    const googleprovider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/course'

    const handlemit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            seterror('');
            navigate(from, {replace:true});
        })
        .catch(error =>{
            console.error(error)
            seterror(error.message);
        })
    }


    const handlegooglein = () =>{
        providerLogin(googleprovider)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(error => console.error(error))

    }
    const handlegit = () =>{
        GitLogin(gitprovider)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .catch(error => console.error(error))
    }


    return (
        <Form onSubmit={handlemit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button className='py-10' variant="primary" type="submit">
        Login
      </Button>
      <Button className='ms-2' variant="info" type="submit">
        <Link to='/register'>Register</Link>
      </Button>
     
      <Button onClick={handlegooglein} className='ms-2'><FaGoogle></FaGoogle>  Google</Button>
      <Button onClick={handlegit} className='ms-2'> <FaGithub></FaGithub> Github</Button>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
      

      <ButtonGroup vertical>
      
      
   
    </ButtonGroup>
    </Form>
    );
};

export default Login;