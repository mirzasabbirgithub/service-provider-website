import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
          const emailRef = useRef('');
          const passwordRef = useRef('');
          const navigate = useNavigate();

          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useSignInWithEmailAndPassword(auth);

          if (user) {
                    navigate('/home');
          }

          const handleSubmit = event => {
                    event.preventDefault();
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;
                    signInWithEmailAndPassword(email, password);
          }

          const navigateToRegister = event => {
                    navigate('/register');
          }
          return (
                    <div className='container w-50 mx-auto'>
                              <h2 className='text-center text-primary'>Please Login</h2>
                              <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Email address</Form.Label>
                                                  <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                                  <Form.Text className="text-muted">
                                                  </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                  <Form.Label>Password</Form.Label>
                                                  <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                                  Submit
                                        </Button>
                              </Form>
                              <p>Are you new ?<Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister} >Please Register</Link> </p>
                              <GoogleLogin></GoogleLogin>
                    </div>
          );
};

export default Login;