import React from 'react';

function Tile({ review }) {
  return review ? (
    <section>
      <div>
        <p>Star rating goes here</p>
        <p>{`${review.reviewer_name}, ${review.date}`}</p>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <div>helpful and report buttons</div>
    </section>
  ) : (<></>);
}

export default Tile;
