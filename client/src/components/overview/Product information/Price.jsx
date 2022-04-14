import React from 'react';
import PropTypes from 'prop-types';
import './ProductInformation.scss';

function Price({ price, salePrice }) {
  if (salePrice === null) {
    return (
      <div className="price">
        <p id="price-tag">
          $
          {price}
        </p>
      </div>
    );
  }
  return (
    <div className="price">
      <p id="sale-price">
        On sale $
        {salePrice}
      </p>
      <p id="original-price">
        $
        {price}
      </p>
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.string,
  salePrice: PropTypes.string,
};

Price.defaultProps = {
  price: '',
  salePrice: null,
};

export default Price;
