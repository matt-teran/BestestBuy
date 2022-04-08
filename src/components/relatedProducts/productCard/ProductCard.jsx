import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../ui/Rating/Rating';
import Btn from '../../ui/Btn/Btn';
import './ProductCard.scss';

function ProductCard({
  category, name, price, avgRating, image, openModal, id,
}) {
  return (
    <div className="card" onKeyDown={(event) => { openModal(event); }} onClick={(event) => { openModal(id); }} role="button" tabIndex={0}>
      <div className="btn-wrapper">
        <Btn />
      </div>
      <div className="detail-wrapper">
        <img src={image} alt={name} className="image" />
        <span className="category">{category}</span>
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
        {avgRating !== -1 ? <Rating rating={avgRating} size="15px" /> : <span className="not-yet-reviewed">Not Yet Reviewed</span>}
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProductCard;
