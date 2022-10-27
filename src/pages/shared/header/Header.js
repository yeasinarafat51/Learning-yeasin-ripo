import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { GoBook } from "react-icons/go";
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../contexts/authcontext/Authprovider';

const Header = () => {
   
    const {user, logout} = useContext(AuthContext);
    const handlelogout = () => {
        logout()
        .then(() =>{})
        .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="info" variant="info">
        <Container>
          <Navbar.Brand href="#home"><GoBook></GoBook> Learning Yeasin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand ><Link to='/'>Home</Link></Navbar.Brand>
              <Navbar.Brand ><Link to='/course'>Course</Link></Navbar.Brand>
              <Navbar.Brand ><Link to='/check'>CheckOut</Link></Navbar.Brand>
              <Navbar.Brand ><Link to='/faq'>FAQ</Link></Navbar.Brand>
              <Navbar.Brand ><Link to='/blog'>Blog</Link></Navbar.Brand>
              <Navbar.Brand ><Link to='/btn'>Dark mode</Link></Navbar.Brand>

              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
             
            </Nav>
            <Nav>
              < >
              {
                   user && user?.uid?
                    <>
                     <span>{user?.displayName}</span>
                     <button onClick={handlelogout}>LogOut</button>
                    </>
                     :
                    <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    </>
                }
                
                </>
              <Nav.Link>
                {user?.photoURL ? 
                <Image style={{height:'40px'}} roundedCircle src={user?.photoURL}></Image>
                :<FaUser></FaUser>
                
            }
        
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;