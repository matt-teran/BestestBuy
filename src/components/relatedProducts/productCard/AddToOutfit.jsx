import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';

function AddToOutfit({ addToOutfit }) {
  return (
    <div className="card">
      <div
        className="add-to-outfit-container"
        onClick={addToOutfit}
        onKeyDown={addToOutfit}
        role="button"
        tabIndex={0}
      >
        <p className="add-to-outfit-icon">+</p>
        <p>Add to Outfit</p>
      </div>
    </div>
  );
}
AddToOutfit.propTypes = {
  addToOutfit: PropTypes.func.isRequired,
};

export default AddToOutfit;
