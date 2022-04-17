import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../../firebase.init';


const auth = getAuth(app);
const Login = () => {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [validated, setValidated] = useState(false);

          const handleSubmit = (event) => {
                    const form = event.currentTarget;
                    if (form.checkValidity() === false) {
                              event.preventDefault();
                              event.stopPropagation();
                              return;
                    }

                    setValidated(true);
          };

          const handleEmailBlur = event => {
                    setEmail(event.target.value);
          }

          const handlePasswordBlur = event => {
                    setPassword(event.target.value);
          }

          const handleSubmitted = (event) => {
                    createUserWithEmailAndPassword(auth, email, password)
                              .then(result => {
                                        const user = result.user;
                                        setEmail('');
                                        setPassword('');
                              })
                              .catch((error) => {
                                        console.error('error', error);
                              });
                    event.preventDefault();
          }
          return (
                    <div className='container w-50 mx-auto'>
                              <h2 className='text-center text-primary'>Please Login</h2>
                              <Form noValidate validated={validated} onSubmit={handleSubmitted}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Email address</Form.Label>
                                                  <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                                                  <Form.Text className="text-muted">
                                                  </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                  <Form.Label>Password</Form.Label>
                                                  <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                                  Submit
                                        </Button>
                              </Form>
                    </div>
          );
};

export default Login;