import React from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './Add to cart/SizeSelector';
import QuantitySelector from './Add to cart/QuantitySelector';
import AddtoCartButton from './Add to cart/AddToCartButton';

function AddtoCart({ sizeAndQuantity, selectSizeAndQuantity, currentSizeAndQuantity }) {
  return (
    <div>
      <div>
        <SizeSelector
          sizeAndQuantity={sizeAndQuantity}
          selectSizeAndQuantity={(event) => selectSizeAndQuantity(event)}
        />
      </div>
      <div><QuantitySelector currentQuantity={currentSizeAndQuantity.value} /></div>
      <div><AddtoCartButton /></div>
    </div>
  );
}

AddtoCart.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
  currentSizeAndQuantity: PropTypes.shape({}),
};

AddtoCart.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: undefined,
  currentSizeAndQuantity: {},
};

export default AddtoCart;
