import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail({ slogan, description }) {
  return (
    <div className="product_detail">
      <p id="slogan">{slogan}</p>
      <p id="description">{description}</p>
    </div>
  );
}

ProductDetail.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
};

ProductDetail.defaultProps = {
  slogan: '',
  description: '',
};

export default ProductDetail;
