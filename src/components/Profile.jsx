/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEdit, FaSignOutAlt, FaShippingFast, FaListAlt, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Profile.css';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setName(storedUser.username || '');
      setAddress(storedUser.address || '');
      setPhone(storedUser.phone || '');
      setImage(storedUser.image || '');
    }
    if (location.state && location.state.orderDetails) {
      setOrderDetails(location.state.orderDetails);
    }
  }, [location.state]);

  const handleEditProfile = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSaveProfile = useCallback(async () => {
    const formData = new FormData();
    if (imageFile) {
      formData.append('profilePic', imageFile);
      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (result.filePath) {
          setImage(result.filePath);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    const updatedUser = { ...user, username: name, address, phone, image: image || user.image };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  }, [imageFile, image, name, address, phone, user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  }, []);

  const showOrderDetailsPrompt = () => {
    if (orderDetails) {
      const orderInfo = `
        Item: ${orderDetails.title}\n
        Price: $${orderDetails.price}\n
        Details: ${orderDetails.description}
      `;
      alert(orderInfo); // Using alert to mimic a prompt-style display
    } else {
      alert('No order details available.');
    }
  };

  const showAddressDetails = () => {
    setShowAddressModal(true);
  };

  const closeAddressModal = () => {
    setShowAddressModal(false);
  };

  if (!user) {
    return (
      <div className='usernot'>
        <h1>Ooops.......!!</h1>
        <h5>Please log in to view your profile.</h5>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card card">
        <div className="card-body">
          <div className="profile-header text-center mb-4">
            <input
              type="file"
              accept="image/*"
              id="profile-pic-upload"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="profile-pic-upload">
              <img
                src={image || '/public/images/profile-pic.jpg'}
                alt="Profile"
                className="profile-pic"
              />
            </label>
            <h3 className="card-title mt-3">{name}</h3>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{phone}</p>
            {isEditing ? (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary" onClick={handleSaveProfile}>
                  Save
                </button>
                <button className="btn btn-secondary ml-2" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-primary" onClick={handleEditProfile}>
                  <FaEdit /> Edit Profile
                </button>
                <button className="btn btn-secondary ml-2" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
                <button className="btn btn-info mt-3" onClick={showOrderDetailsPrompt}>
                  <FaListAlt /> View Order History
                </button>
                <button className="btn btn-info mt-3" onClick={showAddressDetails}>
                  <FaMapMarkerAlt /> View Address Details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Address Details Modal */}
      {showAddressModal && (
        <div className="modal show d-block" style={{ backdropFilter: 'blur(5px)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Address Details</h5>
                <button type="button" className="close" onClick={closeAddressModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>{address}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeAddressModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
