import React from 'react';
import PropTypes from 'prop-types';

function Price({ price }) {
  return (
    <div className="price">
      <p id="priceTag">
        $
        {price}
      </p>
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.string,
};

Price.defaultProps = {
  price: '',
};

export default Price;
