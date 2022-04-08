import React, { useEffect, useState } from 'react';
import request from './requests';
import ReviewTile from './ReviewTile';

// takes an array of reviews and integer that represents the number of stars to return
function filterReviews(reviewsArr, starRating) {
  let filteredArr = [];

  filteredArr = reviewsArr.filter((review) => {
    return (review.rating === starRating)
  });

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
      filter: false,
      reviewsToDisplay: 2,
    };
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const { isLoaded, page } = this.state;
    if (productId && !isLoaded) {
      request.getReviews(productId)
        .then(({ data }) => {
          // //stops further axios requests from this component for the same info that's not there
          if (!data.results.length) {
            this.hideButton = true;
          }
          this.allLoadedReviews = data.results;
          console.log('allLoadedReviews from didmount: ', this.allLoadedReviews);

          let filtered = filterReviews(this.allLoadedReviews, this.state.filter);

          console.log('This is the result of the filter function: ', filtered);

          this.setState({
            isLoaded: true,
            filteredReviews: data.results, // go back here and filter the shiet
            page: page + 1,
          });
        }).catch((err) => {
          console.log(err);
        });
    }
  }

  handleMoreReviews() {
    this.setState({ numberOfTiles: this.state.numberOfTiles + 2 });
    const { numberOfTiles, reviews, page } = this.state;

    // makes an API request ahead of time to always have more reviews ready to be displayed
    if (reviews.length <= numberOfTiles + 3) {
      this.state.page = page + 1;
      request.getReviews(this.props.productId, this.state.page)
        .then(({ data }) => {
          if (data.results.length) {
            this.state.reviews = this.state.reviews.concat(data.results);
          } else {
            //this executes when the data comes back valid but empty
            this.hideButton = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { isLoaded, numberOfTiles, reviews, filter } = this.state;
    const { filteredReviews } = this.state;

    console.log('REVIEWS IN BUFFER', reviews);

    if (!isLoaded) {
      return <div>Loading Ratings and Reviews</div>;
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <div className="reviews-List">
          {filteredReviews.map((review, index) =>
            <ReviewTile key={index} review={review} />)}
          {!this.hideButton ? <button type="button" className="More-Reviews-button" onClick={this.handleMoreReviews}>More Reviews</button> : null}
        </div>
      );
    }

    // if (!isLoaded) {
    //   return <div>Loading Ratings and Reviews</div>;
    //   // eslint-disable-next-line no-else-return
    // } else {
    //   return (
    //     <div className="reviews-List">
    //       { displayedTiles.map((review, index) => {
    //         if (review.rating === filter || filter === false) {
    //           return <ReviewTile key={index} review={review} />
    //         }
    //         return;
    //       }) }
    //       {!this.hideButton ? <button type="button" className="More-Reviews-button" onClick={this.handleMoreReviews}>More Reviews</button> : null}
    //     </div>
    //   );
    // }
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
