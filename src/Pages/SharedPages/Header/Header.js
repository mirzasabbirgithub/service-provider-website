import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
          const user = useAuthState(auth);
          console.log(user);
          const handleSignOut = () => {
                    signOut(auth);
                    console.log(handleSignOut);
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
                                                            <Nav>
                                                                      {
                                                                                user ?
                                                                                          <Nav.Link className='btn btn-primary text-white' onClick={handleSignOut} >Sign Out</Nav.Link>
                                                                                          :
                                                                                          <Nav.Link as={Link} to="login">Login</Nav.Link>
                                                                      }
                                                            </Nav>


                                                  </Navbar.Collapse>
                                        </Container>
                              </Navbar>


                    </>
          );
};

export default Header;