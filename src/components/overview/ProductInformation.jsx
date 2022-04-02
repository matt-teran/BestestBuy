import React from 'react';
import axios from 'axios';
import config from '../../config';
import PropTypes from 'prop-types';
import ProductCategory from './Product information/ProductCategory';

function ProductInformation({ category }) {
  return (
    <div className="product_information_block">
      <div>Rating</div>
      <div><ProductCategory category={category} /></div>
      <div>Title</div>
      <div>Price</div>
      <div>Detail</div>
      <div>Share</div>
    </div>
  );
}

ProductInformation.propTypes = {
  category: PropTypes.string,
};

ProductInformation.defaultProps = {
  category: ' ',
};

export default ProductInformation;
