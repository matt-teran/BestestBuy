import React from 'react';
import PropTypes from 'prop-types';
import ProductCategory from './Product information/ProductCategory';
import ProductTitle from './Product information/ProductTitle';
import ProductDetail from './Product information/ProductDetail';

function ProductInformation({
  category, title, slogan, description,
}) {
  return (
    <div className="product_information_block">
      <div>Rating</div>
      <div><ProductCategory category={category} /></div>
      <div><ProductTitle title={title} /></div>
      <div>Price</div>
      <div><ProductDetail slogan={slogan} description={description} /></div>
      <div>Share</div>
    </div>
  );
}

ProductInformation.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  slogan: PropTypes.string,
  description: PropTypes.string,
};

ProductInformation.defaultProps = {
  category: '',
  title: '',
  slogan: '',
  description: '',
};

export default ProductInformation;
