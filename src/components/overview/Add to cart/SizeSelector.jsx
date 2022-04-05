import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';

function SizeSelector({ sizeAndQuantity, selectSizeAndQuantity }) {
  let sizeAndQuantityArray = [];
  if (sizeAndQuantity === undefined) {
    sizeAndQuantityArray = [{ value: 'undefined', label: 'Please select sytle first' }];
  } else {
    sizeAndQuantityArray = Object.values(sizeAndQuantity);
    for (let i = 0; i < sizeAndQuantityArray.length; i += 1) {
      sizeAndQuantityArray[i].label = sizeAndQuantityArray[i].size || sizeAndQuantityArray[i].label;
      delete sizeAndQuantityArray[i].size;
      sizeAndQuantityArray[i].value = sizeAndQuantityArray[i].quantity
      || sizeAndQuantityArray[i].value;
      delete sizeAndQuantityArray[i].quantity;
    }
  }

  return (
    <div>
      <Select
        options={sizeAndQuantityArray}
        value={[]}
        onChange={(option) => { selectSizeAndQuantity(option[0]); }}
      />
    </div>
  );
}

SizeSelector.propTypes = {
  sizeAndQuantity: PropTypes.shape({}),
  selectSizeAndQuantity: PropTypes.func,
};

SizeSelector.defaultProps = {
  sizeAndQuantity: undefined,
  selectSizeAndQuantity: undefined,
};

export default SizeSelector;
