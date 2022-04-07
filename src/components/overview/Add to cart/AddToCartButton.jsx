import React from 'react';
import PropTypes from 'prop-types';
import './AddtoCart.scss';

function AddtoCartButton({ addToCart }) {
  return (
    <div>
      <button className="add-to-cart-button" type="submit" onClick={() => addToCart()}>Add to bag</button>
    </div>
  );
}

AddtoCartButton.propTypes = {
  addToCart: PropTypes.func,
};

AddtoCartButton.defaultProps = {
  addToCart: () => {},
};

export default AddtoCartButton;
