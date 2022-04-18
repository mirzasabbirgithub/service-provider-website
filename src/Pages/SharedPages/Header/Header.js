import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';



const Header = () => {
          const user = useAuthState(auth);

          const handleSignOut = () => {
                    signOut(auth);
          }

          return (
                    <>
                              <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                                        <Container>
                                                  <Navbar.Brand as={Link} to="home">Doctor Site</Navbar.Brand>
                                                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                                  <Navbar.Collapse id="responsive-navbar-nav">
                                                            <Nav className="me-auto">
                                                                      <Nav.Link as={Link} to="home">Home</Nav.Link>
                                                                      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                                                                      <Nav.Link as={Link} to="about">About</Nav.Link>
                                                            </Nav>
                                                            {
                                                                      user ?
                                                                                <Nav.Link className='btn btn-primary text-white' onClick={handleSignOut} >Log Out</Nav.Link>
                                                                                :
                                                                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                                                            }

                                                  </Navbar.Collapse>
                                        </Container>
                              </Navbar>


                    </>
          );
};

export default Header;