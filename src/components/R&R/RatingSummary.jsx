import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import Rating from '../ui/Rating/Rating';

function RatingSummary() {
  return (
    <section className="RatingSummary">
      <div className="RatingSummaryHeader">
        <div className="RatingSummaryOverall">
          <h3> Overall User Rating </h3>
          <Rating rating={4.5} size="30px" />
        </div>
        <p>4.5 average based off on 298374 reviews</p>
      </div>

      <div className="RatingSummaryStars">
        <div className="RatingSummary5Stars">
          <p>5 Star</p>
          <div className="bar-5" />
          <div className="side Right">
            <div>150</div>
          </div>
        </div>
        <div className="RatingSummary4Stars">
          <p>4 Star</p>
          <div className="bar-4" />
          <div className="side Right">
            <div>182</div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default RatingSummary;

{/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */ }
{/* <FontAwesomeIcon icon={faBarsProgress} /> */ }