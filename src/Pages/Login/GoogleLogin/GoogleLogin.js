import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const GoogleLogin = () => {
          const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
          const navigate = useNavigate();

          let getError;

          if (user) {
                    navigate('/home');
          }
          if (error) {
                    getError = <div>
                              <p className='text-danger'>Error: {error.message}</p>
                    </div>
          }
          return (
                    <div>
                              <div className='d-flex align-items-center'>
                                        <div style={{ height: '1px' }} className='bg-success w-50'></div>
                                        <p className='mt-2 px-2'>OR</p>
                                        <div style={{ height: '1px' }} className='bg-success w-50'></div>
                              </div>
                              {getError}
                              <div className=''>
                                        <button
                                                  onClick={() => signInWithGoogle()}
                                                  className='btn btn-primary w-50 d-block mx-auto my-2'>
                                                  <span className='px-2'>Sign In with Google</span>
                                        </button>
                              </div>
                    </div>
          );
};

export default GoogleLogin;