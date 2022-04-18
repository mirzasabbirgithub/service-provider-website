import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
          const emailRef = useRef('');
          const passwordRef = useRef('');
          const navigate = useNavigate();
          const location = useLocation();
          let from = location.state?.from?.pathname || "/";

          const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
          let getError;
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useSignInWithEmailAndPassword(auth);

          if (loading || sending) {
                    return;
          }

          // navigate current page instead of home page
          if (user) {
                    navigate(from, { replace: true });
          }
          if (error) {
                    getError = <p className='text-danger'>Error: {error.message}</p>
          }

          const handleSubmit = event => {
                    event.preventDefault();
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;
                    signInWithEmailAndPassword(email, password);
          }

          // sent reset email with toast notification
          const resetPassword = async () => {
                    const email = emailRef.current.value;
                    if (email) {
                              await sendPasswordResetEmail(email);
                              toast('Password Reset Email Sent');
                    }
                    else {
                              toast('Enter your email first');
                    }
          }


          // navigate register page
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
                                                  Login
                                        </Button>
                              </Form>
                              {getError}
                              <p>Are you new ?<Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister} >Please Register</Link> </p>
                              <p>Reset Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                              <GoogleLogin></GoogleLogin>
                              <ToastContainer />
                    </div>
          );
};

export default Login;