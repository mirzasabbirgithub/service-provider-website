import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
          const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
                    // send Verification Email 
          ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

          const navigate = useNavigate();

          const navigateToRegister = () => {
                    navigate('/login');
          }


          const handleToRegister = event => {
                    event.preventDefault();
                    const email = event.target.email.value;
                    const password = event.target.password.value;
                    console.log(email, password)
                    createUserWithEmailAndPassword(email, password);
                    navigate('/home');
          }

          return (
                    <div className='container w-50 mx-auto'>
                              <h2 className='text-center text-primary'>Please Register</h2>
                              <Form onSubmit={handleToRegister}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Email address</Form.Label>
                                                  <Form.Control type="email" name="email" placeholder="Enter email" required />
                                                  <Form.Text className="text-muted">
                                                  </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                  <Form.Label>Password</Form.Label>
                                                  <Form.Control type="password" name="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" value="submit">
                                                  Register
                                        </Button>
                              </Form>
                              <p>Are you new ?<Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister} >Please Login</Link> </p>
                    </div>
          );
};


export default Register;