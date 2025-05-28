import React, { useState } from 'react';
import landscapingImg from '../assets/images/landscaping2.jpg';
import deliveryImg from '../assets/images/Delivery1.jpeg';
import seminarsImg from '../assets/images/seminars.jpg';
import cleanersImg from '../assets/images/lawn1.jpg';
import '../styles.css';

const servicesData = [
  {
    title: 'Landscaping and Lawn Maintenance',
    image: landscapingImg,
    description: 'Transform your yard into a beautiful, well-kept space with our expert landscaping and lawn mowing services. We specialize in keeping residential lawns lush, trimmed, and perfectly maintained — so you can enjoy a clean, inviting outdoor space without the hassle. Get in touch today for a free estimate!'
  },

  {
    title: 'Delivery',
    image: deliveryImg,
    description:'Shop from the comfort of your home — we’ll bring it to your door! Fast, reliable delivery service for all your everyday needs. Just place your order, and we’ll handle the rest. Convenience has never been this easy!'
  },

  {
    title: 'Seminars and Events', 
    image: seminarsImg,
    description:'Planning a seminar or event? Let us handle the advertising and arrangements to make your occasion a success! From promotion to logistics, we manage everything so you can focus on your guests. Professional, reliable, and tailored to your needs — contact us today to get started!'
  },
  {
    title: 'Cleaners and movers',
    image: cleanersImg,
    description: 'Moving out or need a deep clean? We have you covered! Our professional cleaners and movers handle everything from packing and transportation to spotless cleaning — making your move stress-free and your space spotless. Fast, reliable, and affordable. Book now and relax — we’ll do the heavy lifting!'
  }

];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="services-card"
          >
            <img src={service.image} 
            alt={service.title} 
            className="service-img" 
            />
            <h3>{service.title}</h3>
             <button 
                className="buy-button"
                onClick={() => handleCardClick(service)}>
                View
              </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedService?.title}</h2>
            <p className="modal-description">
              {selectedService?.description}
            </p>
            <button className="button book-button" onClick={() => alert(`Booking for ${selectedService.title}`)}>
              Book Service
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
