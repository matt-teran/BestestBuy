import React from 'react';
import Rating from '../ui/Rating/Rating';
import moment from 'moment';

function Tile({ review }) {
  const datePosted = review.date.slice(0, 10);
  const formatedDatePosted = moment(datePosted).format('MMMM Do YYYY');
  return review ? (
    <section className="reviewTile">
      <div>
        <Rating rating={review.rating} size="20px" />
        <p className="reviewer">{`${review.reviewer_name}, ${formatedDatePosted}`}</p>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <div className="reviewTileImages">
        {review.photos.map((imgObj, index) => {
          return <img className="reviewImage" key={`image${imgObj.id}`} src={imgObj.url} alt="https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        })}
      </div>
      <div className="helpfulAndReport">
      <button type="button">Helpful({review.helpfulness})</button>
      <button type="button">Report</button>
      <button type="button">Comment</button>
      </div>
    </section>
  ) : (<></>);
}

// {avgRating !== -1 ? <Rating rating={avgRating} size="20px" /> : null}
export default Tile;
