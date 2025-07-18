import React, { useState, useContext } from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Cartcontext'; 


const Service = () => {
  const navigate = useNavigate();
  const { setServiceType } = useContext(CartContext);

  const handleService = (type) => {
    setServiceType(type);
    navigate('/order');
  };

  return (
    <div>
      <div className='header-logo-s'>
        <img src='McDp.jpg' alt='logo' />
      </div>

      <div className='text2'>
        <h1>Take a seat or pick up at counter?</h1>
        <div className='pcs'>
         
            <div className="Ts" onClick={() => {setServiceType("table");navigate("/order");}}></div>

            <div className="Pc" onClick={() => {setServiceType("counter");navigate("/order");}}></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
