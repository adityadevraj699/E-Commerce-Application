/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Trending from './components/Trending';
import Offers from './components/Offers';
import Login from './components/Login';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Checkout from './components/Checkout'; // Ensure you have a checkout component
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

// Helper function to check if an item is already in the cart
const isItemInCart = (cartItems, item) => {
  return cartItems.some(cartItem => cartItem.id === item.id);
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add items to the cart
  const addToCart = (item) => {
    if (isItemInCart(cartItems, item)) {
      alert('This item is already in your cart.');
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  // Function to remove an item from the cart by its ID
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      {/* Pass onSearch prop to Navbar to enable search functionality */}
      <Navbar onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product searchTerm={searchTerm} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/offers" element={<Offers addToCart={addToCart} cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Ensure you have a Checkout component */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
