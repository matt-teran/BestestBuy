import React from 'react';
import PropTypes from 'prop-types';

function QuantitySelector({ currentQuantity }) {
  return (
    <div>
      {console.log('qselect', currentQuantity)}
    </div>
  );
}

QuantitySelector.propTypes = {
  currentQuantity: PropTypes.number,
};

QuantitySelector.defaultProps = {
  currentQuantity: 0,
};

export default QuantitySelector;
