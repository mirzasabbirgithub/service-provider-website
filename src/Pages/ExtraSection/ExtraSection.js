import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bodychange from '../../images/bodychange.jpg';
const ExtraSection = () => {
          return (
                    <Container>
                              <Row>
                                        <Col className='mt-5 img-fluid'><img src={bodychange} height="300px" alt="" /></Col>



                                        <Col className='text-center mt-5'>
                                                  <h3 className='text-primary'>He lost 30kg in 4 months</h3>
                                                  <p>When it comes to losing weight, exercise will be your best friend. If you haven't been exercising for a long time and are feeling very ill, start with 10 minutes a day and increase from 30 minutes to an hour a day. This men got the result by doing exercise regularly</p>
                                        </Col>
                              </Row>

                    </Container>
          );
};

export default ExtraSection;