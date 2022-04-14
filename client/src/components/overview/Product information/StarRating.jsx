import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../ui/Rating/Rating';

function StarRating({ rating, review }) {
  return (
    <div className="rating_review">
      <Rating rating={rating} size="20px" />
      <p>{' '}</p>
      {review !== 0 ? (
        <u
          className="link-to-reviews"
          onClick={() => {
            const element = document.getElementById('ratings-and-reviews');
            element.scrollIntoView();
          }}
          aria-hidden="true"
        >
          Read all
          {' '}
          {review}
          {' '}
          reviews
        </u>
      ) : null}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  review: PropTypes.number,
};

StarRating.defaultProps = {
  rating: 0,
  review: 0,
};

export default StarRating;
