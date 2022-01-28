import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const{user,logOut} = useAuth();
    return (
        <div className=''>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fw-bold'>
            <Container>
            <Navbar.Brand className='fw-bold fs-1 p-0 m-0' href="#home">Adventure</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#blog">Blog</Nav.Link>
                </Nav>
                {
                    user.email && <Link className='text-decoration-none text-primary ms-3' to='/dashboard'>DashBoard</Link>
                }
                {
                    user.email &&  <div className='pt-3'>
                    <p className='ms-4'><i className="fas fa-user"></i> {user.displayName}</p>
                    </div>
                }
                <Nav>
                {
                    user.email ? <button onClick={logOut} className='btn btn-outline-danger fw-bold ms-3'>Log Out</button> : <div className='d-flex'>
                            <Nav.Link as={Link}  to="/register" className='btn btn-outline-danger fw-bold ms-3'> Register</Nav.Link>
                            <Nav.Link as={Link}  to="/login" className='btn btn-outline-danger fw-bold ms-3'>Log In</Nav.Link>
                    </div>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;