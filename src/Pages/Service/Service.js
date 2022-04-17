import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
          const { id, name, img, description, price } = service;
          const navigate = useNavigate();

          const navigateToCheckout = () => {
                    navigate(`/checkout`);
          }

          return (
                    <div className="card g-5 col-sm-12 col-md-6 col-lg-4">
                              <div style={{ width: "18rem" }}>
                                        < img className='card-img-top' src={img} alt="" />
                                        <div class="card-body">
                                                  <h5 className="card-title">{name}</h5>
                                                  <p className="card-text">Price:{price} BDT</p>
                                                  <p className="card-text">Description:{description}</p>
                                                  <button onClick={() => navigateToCheckout()} className='btn btn-primary'>Take The Service</button>
                                        </div>
                              </div >
                    </div >


          );
};

export default Service;