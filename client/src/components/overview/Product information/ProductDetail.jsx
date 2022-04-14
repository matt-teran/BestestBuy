import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail({ slogan, description, features }) {
  const featuresWithIndex = [];
  for (let i = 0; i < features.length; i += 1) {
    featuresWithIndex.push({ feature: features[i].feature, value: features[i].value, id: i });
  }
  return (
    <div className="product-detail">
      <b id="slogan">{slogan}</b>
      <p id="description">{description}</p>
      {featuresWithIndex.map((feature) => (
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
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number, feature: PropTypes.string, value: PropTypes.string,
  })),
};

ProductDetail.defaultProps = {
  slogan: '',
  description: '',
  features: [],
};

export default ProductDetail;
