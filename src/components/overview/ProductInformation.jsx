import React from 'react';
import PropTypes from 'prop-types';
import ProductCategory from './Product information/ProductCategory';
import ProductTitle from './Product information/ProductTitle';

function ProductInformation({ category, title }) {
  return (
    <div className="product_information_block">
      <div>Rating</div>
      <div><ProductCategory category={category} /></div>
      <div><ProductTitle title={title} /></div>
      <div>Price</div>
      <div>Detail</div>
      <div>Share</div>
    </div>
  );
}

ProductInformation.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
};

ProductInformation.defaultProps = {
  category: ' ',
  title: ' ',
};

export default ProductInformation;
