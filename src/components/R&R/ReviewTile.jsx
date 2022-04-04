import React from 'react';
import Rating from '../ui/Rating/Rating';
import moment from 'moment';

function Tile({ review }) {
  const datePosted = review.date.slice(0, 10);
  const formatedDatePosted = moment(datePosted).format('MMMM Do YYYY');
  return review ? (
    <section id="reviewTile">
      <div>
        <Rating rating={review.rating} size="20px" />
        <p>{`${review.reviewer_name}, ${formatedDatePosted}`}</p>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <div>helpful and report buttons</div>
    </section>
  ) : (<></>);
}

// {avgRating !== -1 ? <Rating rating={avgRating} size="20px" /> : null}
export default Tile;
