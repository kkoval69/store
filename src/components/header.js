import React, {useState} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


const Header = () => {

    return (
        <Navbar bg="dark" variant="info" expand="lg" className="header">
            <Container className="nav-wrapper container" fluid>
                <Navbar.Brand className="text-info" href="#">Онлайн магазин</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"  className="text-info nav-link">Главная</Nav.Link>
                        <Nav.Link href="#action2" className="text-info nav-link">Link</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;