import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail({ slogan, description, features }) {
  for (let i = 0; i < features.length; i += 1) {
    features[i].id = i;
  }
  return (
    <div className="product-detail">
      <b id="slogan">{slogan}</b>
      <p id="description">{description}</p>
      {features.map((feature) => (
        <p key={feature.id} className="features">
          <b>√</b>
          {' '}
          {feature.feature}
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
