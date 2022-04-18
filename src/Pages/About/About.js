import React from 'react';
import { Button, Card } from 'react-bootstrap';

const About = () => {
          return (
                    <div>
                              <Card className="text-center">
                                        <Card.Header>About Me </Card.Header>
                                        <Card.Body>
                                                  <Card.Title>Hi, This is <span className='text-success'>Mirza Sabbir Ahmed</span></Card.Title>
                                                  <Card.Text>
                                                            My goal is to become a full stack web developer within next 2 months. As a web developer make website for the users with good and quality experience. I want to build my own company for web development.
                                                  </Card.Text>
                                        </Card.Body>
                              </Card>
                    </div>
          );
};

export default About;