/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import { FaCartPlus, FaInfoCircle } from 'react-icons/fa';
import '../styles/main.css';


const fetchProducts = async () => {
  
  return [
    { id: 1, title: 'Smartphone', description: 'Latest model smartphone', category: 'Electronics', tags: ['smartphone', 'electronics', 'mobile'], img: '/src/assets/images/smartphone.avif', price: '$599.99' },
    { id: 2, title: 'T-shirt', description: 'Trendy T-shirt', category: 'Clothing', tags: ['fashion', 'trending', 'clothing'], img: '/src/assets/images/T-shirt.avif', price: '$29.99' },
    { id: 3, title: 'Wall Clock', description: 'Modern wall clock', category: 'Home Decor', tags: ['decor', 'clock', 'popular'], img: '/src/assets/images/wall-clock.avif', price: '$49.99' },
    { id: 4, title: 'Laptop', description: 'Powerful gaming laptop', category: 'Electronics', tags: ['laptop', 'electronics', 'gaming'], img: '/src/assets/images/laptop.avif', price: '$1199.99' },
    { id: 5, title: 'Sofa', description: 'Comfortable living room sofa', category: 'Furniture', tags: ['sofa', 'furniture', 'comfort'], img: '/src/assets/images/sofa.avif', price: '$899.99' },
  ];
};


const fetchProductData = async (id) => {
  
  return {
    id,
    title: 'Sample Product',
    description: 'This is a detailed description of the product.',
    img: '/src/assets/images/HomeOffer7.avif',
    price: '$99.99',
  };
};

const Product = ({ addToCart, searchTerm }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const loadProduct = async () => {
      if (location.state && location.state.item) {
        setProduct(location.state.item);
        setViewingDetails(true);
      } else if (id) {
        const productData = await fetchProductData(id);
        setProduct(productData);
        setViewingDetails(true);
      }
    };
    loadProduct();
  }, [id, location.state]);

 
  useEffect(() => {
    if (searchInput) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchInput.toLowerCase()))
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); 
    }
  }, [searchInput, products]);

  const handleAddToCart = useCallback(() => {
    if (product) {
      addToCart(product);
      setViewingDetails(false);
    }
  }, [product, addToCart]);

  const handleBuyNow = useCallback(() => {
    if (product) {
      const userChoice = window.confirm(
        `Item: ${product.title}\nPrice: ${product.price}\nDetails: ${product.description}\n\nDo you want to proceed with the purchase?`
      );
      if (userChoice) {
        navigate(`/checkout`, { state: { product } });
      }
    }
  }, [product, navigate]);

  if (!products.length && !product) {
    return <p>Loading products...</p>;
  }

  return (
    <Container className="py-5">
      {viewingDetails && product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={product.img} className="img-fluid rounded" alt={product.title} />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="price mb-3">
              <strong>{product.price}</strong>
            </div>
            <Button variant="primary" onClick={handleAddToCart} className="me-2">
              <FaCartPlus /> Add to Cart
            </Button>
            <Button variant="success" onClick={handleBuyNow}>
             Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center mb-4">Our Products</h2>
          {/* Search Bar */}
          <Form.Control
            type="text"
            placeholder="Search by name, category, or tags..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="mb-4"
          />
          <Row>
            {filteredProducts.length ? (
              filteredProducts.map((prod) => (
                <Col md={4} key={prod.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={prod.img} />
                    <Card.Body>
                      <Card.Title>{prod.title}</Card.Title>
                      <Card.Text>{prod.description}</Card.Text>
                      <div className="price mb-2">
                        <strong>{prod.price}</strong>
                      </div>
                      <Button variant="primary" onClick={() => addToCart(prod)} className="me-2">
                        <FaCartPlus /> Add to Cart
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => navigate(`/product/${prod.id}`, { state: { item: prod } })}
                      >
                        <FaInfoCircle /> View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No products found matching {searchInput}.</p>
            )}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Product;
