import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from './img/Logo.png';


class NavMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img className="logoHeight" src={Logo} alt="" />
                            <span> Mohmmad Amir</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link as={Link} to="/service">service</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavMenu;