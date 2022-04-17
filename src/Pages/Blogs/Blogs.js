import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
          return (
                    <div className='blogs'>
                              <div>
                                        <h2>Blogs</h2>
                              </div>

                              <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                                  <Accordion.Header>Question #1</Accordion.Header>
                                                  <Accordion.Body>

                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                                  <Accordion.Header>Question #2</Accordion.Header>
                                                  <Accordion.Body>

                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                                  <Accordion.Header>Question #3</Accordion.Header>
                                                  <Accordion.Body>

                                                  </Accordion.Body>
                                        </Accordion.Item>
                              </Accordion>
                    </div>
          );
};

export default Blogs;