import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '../../ui/Rating/Rating';
import Btn from '../../ui/Btn/Btn';
import './ProductCard.scss';

function ProductCard({
  category, name, price, avgRating, image, clickHandler, id, outfit,
}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="btn-wrapper" onKeyDown={() => { clickHandler(id); }} onClick={() => { clickHandler(id); }} role="button" tabIndex={0}>
        <Btn char={outfit ? '×' : '★'} />
      </div>
      <div className="card-detail-wrapper">
        <img src={image} alt={name} className="card-image" />
        <span className="card-category">{category}</span>
        <button type="button" onClick={() => navigate(`/${id}`, { replace: true })} className="card-link">
          <span className="card-name">{name}</span>
        </button>
        <span className="card-price">{`$${price}`}</span>
        {avgRating !== -1 ? <Rating rating={avgRating} size="15px" /> : <span className="not-yet-reviewed">Not Yet Reviewed</span>}
      </div>
    </div>
  );
}
ProductCard.defaultProps = {
  outfit: false,
};

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  outfit: PropTypes.bool,
};

export default ProductCard;
