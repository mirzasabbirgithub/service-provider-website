import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();
          return (
                    <footer className=' text-center text-white'>
                              <Container>
                                        <Row>
                                                  <Col><span className='text-info'>Contact: </span> drhabib@ibncina.com <br></br> <span className='text-info'>Phone: </span>  +88123456 <br></br> Location: Dhanmondi, Dhaka </Col>
                                                  <Col><h5>Copyright &copy; {year}</h5></Col>
                                                  <Col>Reserved by Dr. Habib Ahmed<br /> MBBS, FCPS (Surgery)</Col>
                                        </Row>
                              </Container>

                    </footer>
          );
};

export default Footer;