import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';

function AddtoCartButton({ addToCart }) {
  return (
    <div>
      <button className="add_to_cart_button" type="submit" onClick={() => addToCart()}>Add to bag</button>
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
