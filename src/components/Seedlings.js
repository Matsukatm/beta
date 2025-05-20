import React, { useState } from 'react';
import OrderModal from './SeedlingModal';
import kalesImg from '../assets/images/Kales2.jpg';
import managuImg from '../assets/images/managu1.jpg';
import spinachImg from '../assets/images/spinach1.jpg';
import gravelliaImg from '../assets/images/Grevillea1.jpg';
import avocadoImg from '../assets/images/avocado1.jpg';
import '../styles.css';

const seedlingsData = [
  { title: 'Kales', image: kalesImg },
  { title: 'Managu', image: managuImg },
  { title: 'Spinach', image: spinachImg },
  { title: 'Gravellia', image: gravelliaImg },
  { title: 'Avocado', image: avocadoImg }
];

const Seedlings = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSeedling, setSelectedSeedling] = useState(null);

  const handleBuyClick = (seedling) => {
    setSelectedSeedling(seedling);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSeedling(null);
  };

  return (
    <section className="seedlings">
      <h2>Seedlings</h2>
      <div className="seedlings-grid">
        {seedlingsData.map((seedling, index) => (
          <div key={index} className="seedlings-card">
            <img src={seedling.image} alt={`${seedling.title} Seedling`} className="seedling-img" />
            <h3>{seedling.title}</h3>
            <button className="buy-button" onClick={() => handleBuyClick(seedling)}>Buy</button>
          </div>
        ))}
      </div>

      {showModal && (
        <OrderModal
          selectedItem={selectedSeedling}
          closeModal={closeModal}
          />
      )}
    </section>
  );
};

export default Seedlings;
