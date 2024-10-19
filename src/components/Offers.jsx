/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import '../styles/offers.css';

// Sample offers data
const offers = [
  {
    id: 1,
    title: 'Smartphone',
    description: 'Up to 20% off on latest smartphones.',
    img: '/src/assets/images/OfferSmartphone.avif',
    price: '$299.99',
  },
  {
    id: 2,
    title: 'Laptop',
    description: 'Save big on top brand laptops.',
    img: '/src/assets/images/OfferLaptop.avif',
    price: '$799.99',
  },
  {
    id: 3,
    title: 'Headphones',
    description: 'Exclusive offer on wireless headphones.',
    img: '/src/assets/images/OfferHeadphone.avif',
    price: '$59.99',
  },
  {
    id: 4,
    title: 'Home Appliances',
    description: 'Get up to 50% off on appliances.',
    img: '/src/assets/images/OfferHomeApplicant.avif',
    price: '$249.99',
  },
  {
    id: 5,
    title: 'Light',
    description: 'Up to 70% off on latest Light.',
    img: '/src/assets/images/OfferLight.avif',
    price: '$299.99',
  },
  {
    id: 6,
    title: 'Men',
    description: 'All product are biggest brand and new Fashion. ',
    img: '/src/assets/images/OfferMen.avif',
    price: '$799.99',
  },
  {
    id: 7,
    title: 'Women',
    description: 'All product are biggest brand and new Fashion. ',
    img: '/src/assets/images/OfferWomen.avif',
    price: '$59.99',
  },
  {
    id: 8,
    title: 'Child',
    description: 'All product are biggest brand and new Fashion. ',
    img: '/src/assets/images/OfferChild.avif',
    price: '$249.99',
  },
  {
    id: 9,
    title: 'furniture',
    description: 'A Stylish Furniture for beauty of Home. ',
    img: '/src/assets/images/OfferFurniture.avif',
    price: '$299.99',
  },
  {
    id: 10,
    title: 'Shoes',
    description: 'Most comfortable and top most brand Shoe. ',
    img: '/src/assets/images/OfferShoes.avif',
    price: '$799.99',
  },
  {
    id: 11,
    title: 'Perfume',
    description: 'A expensive  perfume with a good smell.',
    img: '/src/assets/images/OfferPerfume.avif',
    price: '$59.99',
  },
  {
    id: 12,
    title: 'Speaker',
    description: 'Up to 70% off on latest Speaker.',
    img: '/src/assets/images/OfferSpeaker.avif',
    price: '$249.99',
  },
];

const Offers = ({ addToCart, cartItems }) => {
  const [show, setShow] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setAddedItem(item);
    setShow(true);
  };

  const handleAddToCart = (item) => {
    // Call the addToCart function passed as a prop
    addToCart(item);
    handleShow(item); // Show the popup after adding to the cart
  };

  const handleBuyNow = (item) => {
    navigate(`/product/${item.id}`, { state: { item } }); // Redirect to Product page with item data
  };

  return (
    <section className="offers-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 text-center">
                <img
                  src={offer.img}
                  className="card-img-top img-fluid offer-img"
                  alt={offer.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                  <div className="price mb-2">
                    <strong>{offer.price}</strong>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(offer)}
                  >
                    <FaCartPlus /> Add to Cart
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => handleBuyNow(offer)}
                    className="ml-2"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {addedItem ? (
            <div>
              <h5>{addedItem.title}</h5>
              <p>{addedItem.description}</p>
              <img src={addedItem.img} alt={addedItem.title} className="img-fluid" />
              <p><strong>{addedItem.price}</strong></p>
              <Button variant="primary" onClick={() => navigate('/cart')}>Go to Cart</Button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Offers;
