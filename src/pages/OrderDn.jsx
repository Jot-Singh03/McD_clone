import React, { useEffect, useContext ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './order.css';
import { CartContext } from './Cartcontext';


const OrderDn = () => {
  const navigate = useNavigate();
  const [orderNumber] = useState(() => Math.floor(Math.random() * 199) + 1);

  const { cartItems, subtotal, gst, total, clearCart, orderType, serviceType  } = useContext(CartContext);
  
  
  const CItems = cartItems.map(item => ({
    name: item.name,
    quantity: item.quantity
  }));

  useEffect(() => {
    const orderData = {
      orderNumber,
      cartItems: CItems,
      subtotal,
      gst,
      total,
      orderType,
      serviceType,
      createdAt: new Date().toISOString()
    };

    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/order/confirm`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Order saved:', data);
        clearCart();
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 12000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
<div className="order-wrapper">
  <div className='header-logo-od'><img src='McDp.jpg' alt='logo' /></div>

  <div className='odr'>
    <h1>We're preparing your order,</h1>
    <h1>please take your receipt</h1>
  </div>

  <div className='num animate__animated animate__pulse animate__infinite'>
    <h1>Your Order</h1>
    <h1>No. <span className="order-number">{orderNumber}</span></h1>
  </div>
</div>
  );
};

export default OrderDn;
