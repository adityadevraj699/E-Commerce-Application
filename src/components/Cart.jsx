/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Cart.css'; 

const Cart = ({ cartItems, removeFromCart, addToCart }) => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
  };

  const handleBuyNow = (item) => {
    navigate(`/product/${item.id}`, { state: { item } });
  };

  return (
    <section className="cart-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="price mb-2">
                      <strong>{item.price}</strong>
                    </div>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
