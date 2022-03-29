import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    const activestyle = {
        fontWeight: "bold",
        color: "white"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className='fw-bold' fixed="top">
                <Container>
                    <Navbar.Brand href="#home">ED-TECH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto mt-2">
                            <NavLink activeStyle={activestyle} className="navbar-brand" to="/">HOME</NavLink>
                            <NavLink activeStyle={activestyle} className="navbar-brand" to="/service">SERVICES</NavLink>
                            <NavLink activeStyle={activestyle} className="navbar-brand" to="/about">ABOUT</NavLink>

                            {
                                user?.email ?
                                    <>
                                        <NavLink onClick={logOut} activeStyle={activestyle} className="navbar-brand" to="/login" > SIGN-OUT </NavLink>
                                        <p  className="navbar-brand"> {user.displayName} </p> 

                                    </>

                                    :

                                    <NavLink to="/login" activeStyle={activestyle} className="navbar-brand"> SIGN-IN</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;