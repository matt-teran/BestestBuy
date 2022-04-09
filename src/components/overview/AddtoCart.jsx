import React from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './Add to cart/SizeSelector';
import QuantitySelector from './Add to cart/QuantitySelector';
import AddtoCartButton from './Add to cart/AddToCartButton';

function AddtoCart({
  sizeAndQuantity, selectSizeAndQuantity, currentSizeAndQuantity,
  selectQuantity, addToCart, openDropdown, open,
}) {
  return (
    <div>
      <div>
        <SizeSelector
          sizeAndQuantity={sizeAndQuantity}
          selectSizeAndQuantity={(event) => selectSizeAndQuantity(event)}
          open={open}
        />
      </div>
      <div>
        <QuantitySelector
          currentQuantity={currentSizeAndQuantity.value}
          selectQuantity={(event) => selectQuantity(event)}
        />
      </div>
      <div>
        <AddtoCartButton
          addToCart={() => addToCart()}
          currentQuantity={currentSizeAndQuantity.value}
          openDropdown={() => openDropdown()}
        />
      </div>
    </div>
  );
}

AddtoCart.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
  currentSizeAndQuantity: PropTypes.shape({}),
  selectQuantity: PropTypes.func,
  addToCart: PropTypes.func,
  open: PropTypes.bool,
  openDropdown: PropTypes.func,
};

AddtoCart.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: () => {},
  currentSizeAndQuantity: {},
  selectQuantity: () => {},
  addToCart: () => {},
  open: false,
  openDropdown: () => {},
};

export default AddtoCart;
