import React, { useEffect, useState } from 'react';
import request from './requests';
import ReviewTile from './ReviewTile';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.hideButton = false;
    this.moreReviewsButtonClicked = 0;

    this.state = {
      numberOfTiles: 2,
      reviews: [],
      isLoaded: false,
      page: 1,
      filter: false,
    };
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const { isLoaded } = this.state;
    if (productId && !isLoaded) {
      request.getReviews(productId)
        .then(({ data }) => {
          // console.log(data.results);
          if (!data.results.length) this.hideButton = true;
          this.setState({
            isLoaded: true,
            reviews: data.results,
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
            this.hideButton = true;
          }
        });
    }
  }

  render() {
    const { isLoaded, numberOfTiles, reviews, filter } = this.state;
    const displayedTiles = reviews.slice(0, numberOfTiles);

    // if (displayedTiles.length) {
    //   console.log('displayedTiles', displayedTiles);
    //   console.log('countFilteredReviews', countFilteredReviews(displayedTiles, 1));
    // }

    if (!isLoaded) {
      return <div>Loading Ratings and Reviews</div>;
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <div className="reviews-List">
          { displayedTiles.map((review, index) => {
            if (review.rating === filter || filter === false) {
              return <ReviewTile key={index} review={review} />
            }
            return;
          }) }
          {!this.hideButton ? <button type="button" className="More-Reviews-button" onClick={this.handleMoreReviews}>More Reviews</button> : null}
        </div>
      );
    }
  }
}

//counts up the number of reviews in the buffer that matches the filter
function countFilteredReviews(reviews, searchNum) {
  let filteredCount = 0;

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].rating === searchNum) {
      filteredCount += 1;
    }
  }

  return filteredCount;
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
