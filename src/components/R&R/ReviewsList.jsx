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
    this.allLoadedReviews = [];
    this.allReviewsRetrieved = false;

    this.state = {
      numberOfTiles: 2,
      filteredReviews: [],
      isLoaded: false,
      page: 1,
      reviewsToDisplay: 2,
      hideButton: false,
    };
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
    this.getEnoughData = this.getEnoughData.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const { isLoaded, page } = this.state;
    if (productId && !isLoaded) {
      new Promise((res, rej) => {
        this.getEnoughData(res, rej);
      })
        .then(() => {
          this.setState({
            isLoaded: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  componentDidUpdate(prevProps) { // handle types of updates here
    const { isLoaded } = this.state;

    if (isLoaded) {
      if (prevProps.filter !== this.props.filter) {
        this.setState({
          filteredReviews: filterReviews(this.allLoadedReviews, this.props.filter),
          reviewsToDisplay: 2,
          hideButton: false,
        })
      }

      // this empties out the stored reviews if a new sort order is selected
      if (prevProps.reviewsSort !== this.props.reviewsSort) {
        this.allLoadedReviews = [];
        this.allReviewsRetrieved = false;
        this.setState({
          numberOfTiles: 2,
          filteredReviews: [],
          page: 1,
          reviewsToDisplay: 2,
          hideButton: false,
        })
      }

      new Promise((res, rej) => {
        this.getEnoughData(res, rej);
      })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleMoreReviews() {
    const { reviewsToDisplay, filteredReviews } = this.state;
    this.setState({ reviewsToDisplay: reviewsToDisplay + 2 });

    if (this.state.filteredReviews.length < this.state.reviewsToDisplay + 2) {
      new Promise((res, rej) => {
        this.getEnoughData(res, rej);
      })
        .then(() => {
          if (filteredReviews.length < this.state.reviewsToDisplay - 1) {
            this.setState({ hideButton: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //takes in a resolve and reject callbacks. This recursively sends API
  //requests until we have at least 2 extra tiles stored in the state to render immediately if more reviews is clicked
  getEnoughData(resCallback, rejCallback) {
    const { productId } = this.props;

    const innerFunc = function () {
      request.getReviews(productId, this.state.page, this.props.reviewsSort)
        .then(({ data }) => {
          this.state.page = this.state.page + 1;
          if (!data.results.length) {
            this.allReviewsRetrieved = true;
          } else {
            this.allLoadedReviews = this.allLoadedReviews.concat(data.results);
            this.setState({ filteredReviews: filterReviews(this.allLoadedReviews, this.props.filter) });
          }
          if (this.allReviewsRetrieved !== true && this.state.filteredReviews.length <= this.state.reviewsToDisplay + 2) {
            innerFunc.call(this);
          }
        }).then(() => {
          resCallback();
        })
        .catch((err) => {
          rejCallback(err);
        });
    };

    innerFunc.call(this);
  }

  render() {
    const { isLoaded, reviewsToDisplay, filteredReviews, hideButton } = this.state;
    const reviewsToShow = filteredReviews.slice(0, reviewsToDisplay);

    if (!isLoaded) {
      return <div>Loading Ratings and Reviews</div>;
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <div className="reviews-List">
          {reviewsToShow.map((review, index) =>
            <ReviewTile key={review.summary} review={review} />)}
          {!hideButton ? <button type="button" className="More-Reviews-button" onClick={this.handleMoreReviews}>More Reviews</button> : null}
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
