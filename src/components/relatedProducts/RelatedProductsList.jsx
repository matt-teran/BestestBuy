import React from 'react';
import propTypes from 'prop-types';
import ProductCard from './productCard/ProductCard';

function RelatedProductsList({ title }) {
  return (
    <div className="products-list">
      {title}
      <ProductCard />
    </div>
  );
}

RelatedProductsList.propTypes = {
  title: propTypes.string.isRequired,
};

export default RelatedProductsList;
