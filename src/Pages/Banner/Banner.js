import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banners/banner1.jpg';
import banner2 from '../../images/Banners/banner2.jpg';
const Banner = () => {
          return (
                    <div className='mx-auto'>
                              <Carousel>
                                        <Carousel.Item>
                                                  <img
                                                            className="d-block w-100"
                                                            src={banner1}
                                                            alt="First slide"
                                                  />
                                                  <Carousel.Caption>
                                                            <h2>Hi, This is Dr Habib Ahmed</h2>
                                                            <p>Your new doctor to help you for better life</p>
                                                  </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                  <img
                                                            className="d-block w-100"
                                                            src={banner2}
                                                            alt="Second slide"
                                                  />

                                                  <Carousel.Caption>
                                                            <h2>Hi, This is Dr Habib Ahmed</h2>
                                                            <p>I'm here to assit you 24/7 with better services</p>
                                                  </Carousel.Caption>
                                        </Carousel.Item>
                              </Carousel>
                    </div>
          );
};

export default Banner;