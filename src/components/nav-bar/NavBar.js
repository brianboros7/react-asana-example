import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import SignUpBtn from '../buttons/signup-btn'
import LogInBtn from '../buttons/login-btn'


function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">My Asana Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Solutions</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/"><SignUpBtn /></Nav.Link>
                    <Nav.Link eventKey={2} href="/">
                        <LogInBtn /> 
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar 