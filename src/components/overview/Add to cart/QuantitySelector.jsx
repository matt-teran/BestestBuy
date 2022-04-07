import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';

function QuantitySelector({ currentQuantity, selectQuantity }) {
  const selectArray = [];
  if (currentQuantity === null) {
    return (
      <div>
        <Select
          placeholder="-"
          disabled={true}
        />
      </div>
    );
  }
  if (currentQuantity === 0) {
    return (
      <div>
        <Select
          placeholder="Out of Stock"
          disabled={true}
        />
      </div>
    );
  }
  if (currentQuantity > 15) {
    for (let i = 1; i < 16; i += 1) {
      selectArray.push({ value: i, label: i });
    }
  } else {
    for (let i = 1; i < currentQuantity + 1; i += 1) {
      selectArray.push({ value: i, label: i });
    }
  }

  return (
    <div>
      <Select
        options={selectArray}
        value={[]}
        onChange={(value) => selectQuantity(value[0].value)}
      />
    </div>
  );
}

QuantitySelector.propTypes = {
  currentQuantity: PropTypes.number,
  selectQuantity: PropTypes.func,
};

QuantitySelector.defaultProps = {
  currentQuantity: 0,
  selectQuantity: () => {},
};

export default QuantitySelector;
