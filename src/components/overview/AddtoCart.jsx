import React from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './Add to cart/SizeSelector';
import QuantitySelector from './Add to cart/QuantitySelector';
import AddtoCartButton from './Add to cart/AddToCartButton';

function AddtoCart({
  sizeAndQuantity, selectSizeAndQuantity, currentSizeAndQuantity, selectQuantity,
}) {
  return (
    <div>
      <div>
        <SizeSelector
          sizeAndQuantity={sizeAndQuantity}
          selectSizeAndQuantity={(event) => selectSizeAndQuantity(event)}
        />
      </div>
      <div>
        <QuantitySelector
          currentQuantity={currentSizeAndQuantity.value}
          selectQuantity={(event) => selectQuantity(event)}
        />
      </div>
      <div><AddtoCartButton /></div>
    </div>
  );
}

AddtoCart.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
  currentSizeAndQuantity: PropTypes.shape({}),
  selectQuantity: PropTypes.func,
};

AddtoCart.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: () => {},
  currentSizeAndQuantity: {},
  selectQuantity: () => {},
};

export default AddtoCart;
