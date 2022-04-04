import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail({ slogan, description, features }) {
  return (
    <div className="product_detail">
      <p id="slogan">{slogan}</p>
      <p id="description">{description}</p>
      {features.map((feature) => (
        <p key={feature.value}>
          {feature.feature}
          :
          {' '}
          {feature.value}
        </p>
      ))}
    </div>
  );
}

ProductDetail.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductDetail.defaultProps = {
  slogan: '',
  description: '',
  features: [],
};

export default ProductDetail;
