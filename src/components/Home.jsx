/* eslint-disable no-unused-vars */
// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaLaptop, FaTshirt, } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="/src/assets/images/HomeImage1.avif"
          alt="Amazon Background"
          className="hero-background"
        />
        <div className="hero-content">
          <h1>Welcome to Online Fashion Store</h1>
          <p>Shop the best products with amazing deals!</p>
          <Link to="/trending" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section container mt-5">
        <h2>Shop By Category</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="category-card">
              <FaMobileAlt size={50} />
              <h5>Mobile Phones</h5>
              <Link to="/product/mobile" className="btn btn-outline-secondary">
                View More
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="category-card">
              <FaLaptop size={50} />
              <h5>Laptops</h5>
              <Link to="/product/laptop" className="btn btn-outline-secondary">
                View More
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="category-card">
              <FaTshirt size={50} />
              <h5>Clothing</h5>
              <Link to="/product/clothing" className="btn btn-outline-secondary">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Deals Section */}
      <div className="trending-section container mt-5">
        <h2>Trending Deals</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src="/src/assets/images/HomeOffer7.avif"
                className="card-img-top"
                alt="Deal 1"
              />
              <div className="card-body">
                <h5 className="card-title">Deal 1</h5>
                <p className="card-text">Amazing offer on this product!</p>
                <Link to="/product/deal1" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src="/src/assets/images/HomeOffer3.avif"
                className="card-img-top"
                alt="Deal 2"
              />
              <div className="card-body">
                <h5 className="card-title">Deal 2</h5>
                <p className="card-text">Grab this deal before its gone!</p>
                <Link to="/product/deal2" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src="/src/assets/images/HomeOffer2.avif"
                className="card-img-top"
                alt="Deal 3"
              />
              <div className="card-body">
                <h5 className="card-title">Deal 3</h5>
                <p className="card-text">Limited time offer on this product!</p>
                <Link to="/product/deal3" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
