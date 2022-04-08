import React, { useEffect, useState } from 'react';
import request from './requests';
import ReviewTile from './ReviewTile';

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
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.hideButton = false;

    this.state = {
      numberOfTiles: 2,
      reviews: [],
      isLoaded: false,
      page: 1,
      filter: 1,
      displayFilteredReviews: 2,
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

    if (this.state.filter !== false) {
      this.state.displayFilteredReviews++;
    }

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
    let numFilteredReviews;

    //hardcoded data here
    if(this.state.filter!== false) numFilteredReviews = countFilteredReviews(displayedTiles, this.state.filter);

    console.log('numfilteredReviews: ', numFilteredReviews);

    console.log('this.state.filter: ', this.state.filter);
    console.log('numFilteredReviews: ', numFilteredReviews);
    console.log('this.state.hideButton', this.hideButton);

    if (this.state.filter !== false && this.state.displayFilteredReviews > numFilteredReviews && this.hideButton === false) {
      console.log('countFilteredReviews: ', this.state.countFilteredReviews);
      console.log('NumFilteredReviews: ', numFilteredReviews);
      console.log('ReviewsLoaded: ', this.state.reviews);
      // this.handleMoreReviews();
    }

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
