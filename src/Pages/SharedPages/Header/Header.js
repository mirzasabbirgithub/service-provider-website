import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <>
                              <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                                        <Container>
                                                  <Navbar.Brand as={Link} to="home">Doctor Site</Navbar.Brand>
                                                  <Nav className="me-auto">
                                                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                                                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                                                            <Nav.Link as={Link} to="about">About</Nav.Link>
                                                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                                                            <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
                                                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                                                  </Nav>
                                        </Container>
                              </Navbar>


                    </>
          );
};

export default Header;