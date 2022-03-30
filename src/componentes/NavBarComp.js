import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBarComp extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" classname="d-flex" >
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="mx-auto my-4 my-lg-0"
                            style={{ maxHeight: '550px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/" className='mx-3 text-uppercase fw-bold'>inicio</Nav.Link>
                            <NavDropdown className='mx-3 fw-bold' title="PRODUCTOS" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/category/sativa">Sativa</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/category/indica" href="#action4">Indica</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link as={Link} className='mx-3 text-uppercase fw-bold' to="/contacto">
                                contacto
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
