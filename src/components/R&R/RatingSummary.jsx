import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../ui/Rating/Rating';

function RatingSummary({ productStats }) {

  const counts = getAvgRating(productStats.ratings);
  const ratingPercentages = {
    1: ((productStats.ratings[1] / counts.noOfRatings) * 100).toString(),
    2: ((productStats.ratings[2] / counts.noOfRatings) * 100).toString(),
    3: ((productStats.ratings[3] / counts.noOfRatings) * 100).toString(),
    4: ((productStats.ratings[4] / counts.noOfRatings) * 100).toString(),
    5: ((productStats.ratings[5] / counts.noOfRatings) * 100).toString(),
  };

  return (
    <section className="Rating-Summary">
      <div className="Rating-Summary-Header">
        <div className="Rating-Summary-Overall">
          <h3> Overall User Rating </h3>
          <Rating rating={counts.avg} size="30px" />
        </div>
        <p>{counts.avg.toFixed(1)} star(s) average based on {counts.noOfRatings} reviews</p>
      </div>

      <div className="Rating-Summary-Bars">
        <div className="Rating-Summary-Stats">
          <p>5 Star</p>
          <div className="bar-5" style={{ width: ratingPercentages[5]+"%" }} />
          <div className="side Right">
            <div>{productStats.ratings[5]}</div>
          </div>
        </div>
        <div className="Rating-Summary-Stats">
          <p>4 Star</p>
          <div className="bar-4" style={{ width: ratingPercentages[4]+"%" }} />
          <div className="side Right">
            <div>{productStats.ratings[4]}</div>
          </div>
        </div>
        <div className="Rating-Summary-Stats">
          <p>3 Star</p>
          <div className="bar-3" style={{ width: ratingPercentages[3]+"%" }} />
          <div className="side Right">
            <div>{productStats.ratings[3]}</div>
          </div>
        </div>
        <div className="Rating-Summary-Stats">
          <p>2 Star</p>
          <div className="bar-2" style={{ width: ratingPercentages[2]+"%" }} />
          <div className="side Right">
            <div>{productStats.ratings[2]}</div>
          </div>
        </div>
        <div className="Rating-Summary-Stats">
          <p>1 Star</p>
          <div className="bar-1" style={{ width: ratingPercentages[1]+"%" }} />
          <div className="side Right">
            <div>{productStats.ratings[1]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getAvgRating(ratings) {
  const ratingsArray = Object.keys(ratings);
  if (ratingsArray.length === 0) {
    return -1;
  }
  let total = 0;
  let numberOfRatings = 0;
  ratingsArray.forEach((stars) => {
    numberOfRatings += Number(ratings[stars]);
    total += stars * Number(ratings[stars]);
  });
  return { avg: total / numberOfRatings, noOfRatings: numberOfRatings };
}

export default RatingSummary;
