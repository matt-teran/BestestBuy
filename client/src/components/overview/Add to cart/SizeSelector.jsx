import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './AddtoCart.scss';

function SizeSelector({
  sizeAndQuantity, selectSizeAndQuantity, open, currentSizeAndQuantity,
}) {
  let sizeAndQuantityArray = [];
  // if selected size and quantity is not defined, change dropdown selector to not available
  if (sizeAndQuantity === undefined) {
    sizeAndQuantityArray = [{ value: 'Not available', label: 'Not available' }];
  } else {
    // otherwise, loop through size and quantity object
    // change the keys from size to label, quantity to value
    // and push them into an array
    sizeAndQuantityArray = Object.values(sizeAndQuantity);
    for (let i = 0; i < sizeAndQuantityArray.length; i += 1) {
      sizeAndQuantityArray[i].label = sizeAndQuantityArray[i].size || sizeAndQuantityArray[i].label;
      delete sizeAndQuantityArray[i].size;
      sizeAndQuantityArray[i].value = sizeAndQuantityArray[i].quantity
      || sizeAndQuantityArray[i].value;
      delete sizeAndQuantityArray[i].quantity;
      if (sizeAndQuantityArray[i].label === undefined) {
        sizeAndQuantityArray[i].label = 'Not available';
      }
      if (sizeAndQuantityArray[i].value === undefined) {
        sizeAndQuantityArray[i].value = 0;
      }
      sizeAndQuantityArray[i].key = i;
    }
  }
  if (open) {
    return (
      <div className="size-selector">
        <Select
          options={sizeAndQuantityArray}
          value={currentSizeAndQuantity}
          menuIsOpen={open}
          placeholder="Select Size"
          onChange={(option) => { selectSizeAndQuantity(option); }}
        />
      </div>
    );
  }
  return (
    <div className="size-selector">
      <Select
        options={sizeAndQuantityArray}
        value={currentSizeAndQuantity}
        placeholder="Select Size"
        onChange={(option) => { selectSizeAndQuantity(option); }}
      />
    </div>
  );
}

SizeSelector.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
  open: PropTypes.bool,
  currentSizeAndQuantity: PropTypes.shape({}),
};

SizeSelector.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: () => {},
  open: false,
  currentSizeAndQuantity: {},
};

export default SizeSelector;
