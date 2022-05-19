import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail({ productInfo }) {
  return (
    <div className="product-detail">
      <b id="slogan">{productInfo.slogan}</b>
      <p id="description">{productInfo.description}</p>
      {productInfo.features.map((feature) => (
        <p key={feature.feature} className="features">
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
  productInfo: PropTypes.shape({
    slogan: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number, feature: PropTypes.string, value: PropTypes.string,
    })),
  }),
};

ProductDetail.defaultProps = {
  productInfo: {
    slogan: '',
    description: '',
    features: [],
  },
};

export default ProductDetail;
