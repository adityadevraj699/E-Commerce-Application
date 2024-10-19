/* eslint-disable no-unused-vars */
// src/components/Trending.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaTag } from "react-icons/fa";
import "../styles/Trending.css";

const Trending = () => {
  // Sample data for trending products
  const products = [
    {
      id: 1,
      name: "Trending Product 1",
      image: "/src/assets/images/HomeOffer1.avif",
      price: "$99.99",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Trending Product 2",
      image: "/src/assets/images/HomeOffer2.avif",
      price: "$129.99",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Trending Product 3",
      image: "/src/assets/images/HomeOffer3.avif",
      price: "$79.99",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Trending Product 4",
      image: "/src/assets/images/HomeOffer4.avif",
      price: "$89.99",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Trending Product 5",
      image: "/src/assets/images/HomeOffer5.avif",
      price: "$149.99",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Trending Product 6",
      image: "/src/assets/images/HomeOffer6.avif",
      price: "$109.99",
      rating: 4.4,
    },
  ];

  return (
    <div className="trending-container">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Trending Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card trending-card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    <FaTag /> {product.price}
                  </p>
                  <p className="card-text">
                    <FaStar /> {product.rating} / 5
                  </p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
