import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const Service = ({ service }) => {
          const { id, name, img, description, price } = service;
          return (
                    <div className="card g-5 col-sm-12 col-md-6 col-lg-4">
                              <div style={{ width: "18rem" }}>
                                        < img className='card-img-top' src={img} alt="" />
                                        <div class="card-body">
                                                  <h5 className="card-title">{name}</h5>
                                                  <p className="card-text">Price:{price} BDT</p>
                                                  <p className="card-text">Description:{description}</p>
                                                  <a href="#" className='btn btn-primary'>Take The Service</a>
                                        </div>
                              </div >
                    </div >


          );
};

export default Service;