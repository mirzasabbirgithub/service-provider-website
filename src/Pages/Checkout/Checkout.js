import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Checkout = () => {
          return (
                    <div>
                              <h2>Welcome to checkout page</h2>
                              <h4>Fill up the information</h4>
                              <div className='w-50 mx-auto'>
                                        <Form>
                                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Control type="text" placeholder="Your Name" />
                                                            <Form.Text className="text-muted">
                                                            </Form.Text>
                                                  </Form.Group>
                                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Control type="text" placeholder="Your Address" />
                                                            <Form.Text className="text-muted">
                                                            </Form.Text>
                                                  </Form.Group>

                                                  <Button variant="primary" type="submit">
                                                            Submit Now
                                                  </Button>
                                        </Form>
                              </div>
                    </div>
          );
};

export default Checkout;