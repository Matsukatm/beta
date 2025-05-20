import React, { useState } from 'react';
import axios from 'axios';

const OrderModal = ({ selectedItem, closeModal }) => {
  const [quantity, setQuantity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [dateRequested, setDateRequested] = useState('');
  const pricePerItem = 0.5;
  const totalPrice = quantity ? (quantity * pricePerItem).toFixed(2) : '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/orders', {
        item_name: selectedItem.title,
        quantity: parseInt(quantity),
        price: totalPrice,
        date_requested: dateRequested,
        payment_method: paymentMethod,
      });

      alert('Order submitted successfully!');
      closeModal();
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('Failed to submit order.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <h2>Buy {selectedItem.title}</h2>
        <form className="service-form" onSubmit={handleSubmit}>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              min="1"
              placeholder="Enter quantity"
            />
          </label>
          <label>
            Price (Ksh):
            <input type="text" value={totalPrice} readOnly />
          </label>
          <label>
            Preferred Date:
            <input
              type="date"
              value={dateRequested}
              onChange={(e) => setDateRequested(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </label>
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="mpesa">M-Pesa</option>
              <option value="cash">Cash On Delivery</option>
            </select>
          </label>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
