/* eslint-disable */
import React from 'react';
import Rating from '../ui/Rating/Rating';


function RatingSummary({ productStats, filterSelect }) {

  let reviewsPresent;

  let percentageRecommendMessage = calculatePercentageRecommend(productStats.recommended);

  if (Object.keys(productStats.ratings).length > 0) {
    reviewsPresent = true;
  } else {
    reviewsPresent = false;
  }
  if (reviewsPresent) {
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
          </div>
          <p>{counts.avg.toFixed(1)} star(s) average based on {counts.noOfRatings} reviews</p>
          <p>{percentageRecommendMessage}</p>
        </div>

        <div className="Rating-Summary-Bars">
          <div className="Rating-Summary-Stats">
            <p onClick={() => { filterSelect(5) }} className="star-filter">5 Stars - "Great" </p>
            <div className="bar-5 bar" style={{ width: ratingPercentages[5] + "%" }} />
            <div className="side Right">
              <div>{productStats.ratings[5]}</div>
            </div>
          </div>
          <div className="Rating-Summary-Stats">
            <p onClick={() => { filterSelect(4) }} className="star-filter">4 Stars - "Good"</p>
            <div className="bar-4 bar" style={{ width: ratingPercentages[4] + "%" }} />
            <div className="side Right">
              <div>{productStats.ratings[4]}</div>
            </div>
          </div>
          <div className="Rating-Summary-Stats">
            <p onClick={() => { filterSelect(3) }} className="star-filter">3 Stars - "Average"</p>
            <div className="bar-3 bar" style={{ width: ratingPercentages[3] + "%" }} />
            <div className="side Right">
              <div>{productStats.ratings[3]}</div>
            </div>
          </div>
          <div className="Rating-Summary-Stats">
            <p onClick={() => { filterSelect(2) }} className="star-filter">2 Stars - "Fair"</p>
            <div className="bar-2 bar" style={{ width: ratingPercentages[2] + "%" }} />
            <div className="side Right">
              <div>{productStats.ratings[2]}</div>
            </div>
          </div>
          <div className="Rating-Summary-Stats">
            <p onClick={() => { filterSelect(1) }} className="star-filter">1 Star - "Poor"</p>
            <div className="bar-1 bar" style={{ width: ratingPercentages[1] + "%" }} />
            <div className="side Right">
              <div>{productStats.ratings[1]}</div>
            </div>
          </div>
        </div>
        <p onClick={() => { filterSelect(false) }} className="star-filter"> Reset Filter</p>
      </section>
    );
  } else {

    return (
      <section className="Rating-Summary">
        <div className="Rating-Summary-Header">
          <div className="Rating-Summary-Overall">
            <h3> No user ratings or reviews yet! </h3>
          </div>
          <p>0 star(s) average based on 0 reviews</p>
        </div>
      </section>
    );
  }

}

//input: object {true: num, false: num}
//output: string stating % of people recommend
//constaints: True and/or false might be undefined or not present
function calculatePercentageRecommend(recommendStats) {
  let recommendStatus = '"This item is dope!" - Some reviewer';

  if(recommendStats['true'] === undefined && recommendStats['false'] === undefined) {
    recommendStatus = "No reviews yet, but I'm sure someone thinks this is cool";
  } else if (recommendStats['true'] !== undefined && recommendStats['false'] === undefined) {
    recommendStatus = "100% of people recommend this product";
  } else if (recommendStats['true'] === undefined && recommendStats['false'] !== undefined) {
    recommendStatus = '0% of people recommend this product';
  } else {
    let wouldRecommend = parseInt(recommendStats.true);
    let wouldNotRecommend = parseInt(recommendStats.false);

    let percentage = Math.trunc((wouldRecommend/(wouldRecommend+wouldNotRecommend)) * 100);
    recommendStatus = `${percentage}% of people recommend this product`
  }

  return recommendStatus;
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
