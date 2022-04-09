import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';
import './AddtoCart.scss';

function SizeSelector({ sizeAndQuantity, selectSizeAndQuantity, open }) {
  let sizeAndQuantityArray = [];
  if (sizeAndQuantity === undefined) {
    sizeAndQuantityArray = [{ value: 'Not available', label: 'Not available' }];
  } else {
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
  return (
    <div className="size-selector">
      <Select
        placeholder="Select Size"
        options={sizeAndQuantityArray}
        value={[]}
        keepOpen={open}
        onChange={(option) => { selectSizeAndQuantity(option[0]); }}
      />
    </div>
  );
}

SizeSelector.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
  open: PropTypes.bool,
};

SizeSelector.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: () => {},
  open: false,
};

export default SizeSelector;
