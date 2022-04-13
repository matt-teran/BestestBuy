import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './AddtoCart.scss';

function QuantitySelector({ currentQuantity, selectQuantity, quantitySelected }) {
  const selectArray = [];
  // if quantity wasn't selected, display -
  if (currentQuantity === null) {
    return (
      <div className="quantity-selector">
        <Select
          value={{ value: quantitySelected, label: '-' }}
          isDisabled
        />
      </div>
    );
  }
  // if selected style have quantity of 0, display out of stock
  if (currentQuantity === 0) {
    return (
      <div className="quantity-selector">
        <Select
          value={{ value: quantitySelected, label: 'Out of Stock' }}
          isDisabled
        />
      </div>
    );
  }
  // if selected style have quantity larger than 15, only display up to 15
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
    <div className="quantity-selector">
      <Select
        options={selectArray}
        value={{ label: quantitySelected, value: quantitySelected }}
        onChange={(value) => selectQuantity(value.value)}
      />
    </div>
  );
}

QuantitySelector.propTypes = {
  currentQuantity: PropTypes.number,
  selectQuantity: PropTypes.func,
  quantitySelected: PropTypes.number,
};

QuantitySelector.defaultProps = {
  currentQuantity: 0,
  selectQuantity: () => {},
  quantitySelected: 0,
};

export default QuantitySelector;
