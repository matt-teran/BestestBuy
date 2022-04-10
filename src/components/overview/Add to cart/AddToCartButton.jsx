import React from 'react';
import PropTypes from 'prop-types';
import './AddtoCart.scss';

function AddtoCartButton({ addToCart, currentQuantity, openDropdown }) {
  if (currentQuantity === 0) {
    return (
      <div className="add-to-cart-button-placeholder"><p>{' '}</p></div>
    );
  }
  if (currentQuantity === null) {
    return (
      <div>
        <button className="add-to-cart-button" type="submit" onClick={() => openDropdown()}>Add to bag</button>
      </div>
    );
  }
  return (
    <div>
      <button className="add-to-cart-button" type="submit" onClick={() => addToCart()}>Add to bag</button>
    </div>
  );
}

AddtoCartButton.propTypes = {
  addToCart: PropTypes.func,
  currentQuantity: PropTypes.number,
  openDropdown: PropTypes.func,
};

AddtoCartButton.defaultProps = {
  addToCart: () => {},
  currentQuantity: 0,
  openDropdown: () => {},
};

export default AddtoCartButton;
