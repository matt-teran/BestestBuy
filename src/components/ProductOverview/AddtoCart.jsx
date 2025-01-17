import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './Add to cart/SizeSelector';
import QuantitySelector from './Add to cart/QuantitySelector';
import AddtoCartButton from './Add to cart/AddToCartButton';

function AddtoCart({
  sizeAndQuantity, selectSizeAndQuantity, currentSizeAndQuantity,
  selectQuantity, addToCart, openDropdown, open, quantitySelected,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="add-to-cart">
      <SizeSelector
        sizeAndQuantity={sizeAndQuantity}
        selectSizeAndQuantity={(event) => selectSizeAndQuantity(event)}
        open={open}
        currentSizeAndQuantity={currentSizeAndQuantity}
      />
      <QuantitySelector
        currentQuantity={currentSizeAndQuantity.value}
        selectQuantity={(event) => selectQuantity(event)}
        quantitySelected={quantitySelected}
      />
      <AddtoCartButton
        addToCart={() => addToCart()}
        currentQuantity={currentSizeAndQuantity.value}
        openDropdown={() => openDropdown()}
      />
    </div>
  );
}

AddtoCart.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
  currentSizeAndQuantity: PropTypes.shape({ value: PropTypes.number }),
  selectQuantity: PropTypes.func,
  addToCart: PropTypes.func,
  open: PropTypes.bool,
  openDropdown: PropTypes.func,
  quantitySelected: PropTypes.number,
};

AddtoCart.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: () => {},
  currentSizeAndQuantity: {},
  selectQuantity: () => {},
  addToCart: () => {},
  open: false,
  openDropdown: () => {},
  quantitySelected: null,
};

export default AddtoCart;
