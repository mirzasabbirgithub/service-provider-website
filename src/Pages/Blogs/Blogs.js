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
                                                  <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                                                  <Accordion.Body>
                                                            The basic difference between authentication and authorization is, Firstly Authentication is a system to verify who is the user. Secondly, Whereas authorization is the system to verify which application or files user has to access. Authentication is the first step to check who try to access management process whereas authorization take place after complete the authentication.
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                                  <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                                  <Accordion.Body>

                                                            Firebase has lot of features for example, It's a real time database management system, It has higher ability to Machine Learning API's, It's optimized app performance, It's also a non relational database for this features I'm using firebase. <br></br>

                                                            The other ways of application except firebase are, Token-Based authentication, Cookie-Based authentication, SAML etc.
                                                  </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                                  <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                                                  <Accordion.Body>
                                                            Other services does firebase provide other than authentication are,
                                                            Cloud filestore which is a NoSQL document database, hosting to host website, cloud storage to store data, Google analystics to getting information about how many users visited. Simple but strong authentication system, (Social app and email password authentication.)
                                                  </Accordion.Body>
                                        </Accordion.Item>
                              </Accordion>
                    </div>
          );
};

export default Blogs;