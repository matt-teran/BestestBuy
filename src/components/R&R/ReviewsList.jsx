/* eslint-disable */
import React, { useEffect, useState } from 'react';
import request from './requests';
import ReviewTile from './ReviewTile';

// takes an array of reviews and integer that represents the number of stars to return
function filterReviews(reviewsArr, starRating) {
  let filteredArr;
  if (starRating) {
    filteredArr = reviewsArr.filter((review) => {
      return (review.rating === starRating)
    });
  } else {
    filteredArr = reviewsArr;
  }
  return filteredArr;
}
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.hideButton = false;
    this.allLoadedReviews = [];

    this.state = {
      numberOfTiles: 2,
      filteredReviews: [],
      isLoaded: false,
      page: 1,
      filter: 1,
      reviewsToDisplay: 2,
    };
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getEnoughData = this.getEnoughData.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const { isLoaded, page } = this.state;
    if (productId && !isLoaded) {
      new Promise((res, rej) => {
        this.getEnoughData(res);
      })
        .then(() => {
          console.log('Content is now loaded!');
          this.setState({
            isLoaded: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleMoreReviews() {
    if (this.filteredReviews.length > this.reviewsToDisplay + 2) {

    }
  }

  //takes in a resolve callback
  getEnoughData(callback) {
    const { productId } = this.props;

    const innerFunc = function () {
      request.getReviews(productId, this.state.page)
        .then(({ data }) => {
          this.state.page = this.state.page + 1;
          if (!data.results.length) {
            this.hideButton = true;
          } else {
            this.allLoadedReviews = this.allLoadedReviews.concat(data.results);
            this.setState({filteredReviews: filterReviews(this.allLoadedReviews, this.state.filter)});
          }
          if (this.hideButton !== true && this.state.filteredReviews.length <= this.state.reviewsToDisplay + 2) {
            console.log('notorize bitch');
            innerFunc.call(this);
          }
        }).then(()=>{
          console.log('this is the filtered reviews', this.state.filteredReviews);
          callback();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    innerFunc.call(this);
  }

  render() {
    const { isLoaded, reviewsToDisplay } = this.state;
    const { filteredReviews } = this.state;
    const reviewsToShow = filteredReviews.slice(0, reviewsToDisplay);

    if (!isLoaded) {
      return <div>Loading Ratings and Reviews</div>;
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <div className="reviews-List">
          {reviewsToShow.map((review, index) =>
            <ReviewTile key={index} review={review} />)}
          {!this.hideButton ? <button type="button" className="More-Reviews-button" onClick={this.handleMoreReviews}>More Reviews</button> : null}
        </div>
      );
    }
  }
}

/*
star rating
date of review
review summary
review body
  review photos
recommend
reviewer name
response to review
rating helpfulness
*/

// The most commonly used react hooks: useState, useEffect, useContext
export default ReviewsList;
