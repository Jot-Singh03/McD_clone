import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "./Cartcontext";
import "./Cart.css";

const CartPage = () => {
  const { cartItems, updateQty, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = +(subtotal * 0.05).toFixed(2);
  const total = subtotal + gst;

  return (
    <div className="cart-page">
      <div className="head"><img className="bagcp" src="./bag.jpg" alt="bag"/>
      <h2>Your Order</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>Complimentary Condimentes</p>
              <button>View Details</button>
            </div>

            <div className="qty-control">
              <button onClick={() => updateQty(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
            </div>

            <p>₹{(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
            
          </div>
          
        ))
        
      )}
          <div style={{ height: '300px' }}></div>


      

      {/* Action Buttons */}
      <div className="below">
          <div className='mqr2'>
          <img className="qrpic" src="/qr.png" alt="QR" />
          <p>Have a Code?</p>
          <h3>Scan or tap here</h3>
          <i className="fa-solid fa-chevron-down " ></i>

        </div>

           
        <div className='option2'>
        
          <div className="order-value2">
         {cartItems.length > 0 && (
       <div className="cart-summary2">
          <div className="row">
            <p>Subtotal:</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="row">
            <p>GST:</p>
            <p>₹{gst}</p>
          </div>
          <div className="row">
            <h3>Total:</h3>
            <h3>Rs{total.toFixed(2)}</h3>
          </div>
        </div>

      )}
      <div className="buttonc">
      <div className="Om"onClick={() => navigate("/menu")} >
            <p>Order More</p>
      </div>
            <div className='vo2' onClick={() => navigate("/pay")}>
            <p>Complete My Order</p>
          </div>
          </div>
      </div>
          
          
          <div className='mbut'>
            <div className="SO" onClick={() => navigate("/")}>
            <p>Start Over</p>
            </div>
            <div className="Access2">
            <i className="fa-solid fa-wheelchair " ></i>
            <p>Accessibility</p>
            </div>
            
          </div>
          
          <div className="cal">
          <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request.</p>
        </div>
        </div>
      </div>


    </div>
  );
};

export default CartPage;
