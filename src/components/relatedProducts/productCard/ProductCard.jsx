import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../ui/Rating/Rating';
import './ProductCard.scss';

function ProductCard({
  category, name, price, avgRating,
}) {
  return (
    <div className="card">
      <span>{category}</span>
      <span>{name}</span>
      <span>{`$${price}`}</span>
      {avgRating !== -1 ? <Rating rating={avgRating} size="20px" /> : null}
    </div>
  );
}

export default ProductCard;
ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
};
