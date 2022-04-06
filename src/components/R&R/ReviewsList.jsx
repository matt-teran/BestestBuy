import React, { useEffect, useState } from 'react';
import request from './requests';
import ReviewTile from './ReviewTile';
import 'regenerator-runtime/runtime';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.hideButton = false;
    this.state = {
      numberOfTiles: 2,
      reviews: [],
      isLoaded: false,
      page: 1,
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
        }).catch(() => {
          console.log('something went wrong with the API request in ReviewsList');
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
    const { isLoaded, numberOfTiles, reviews } = this.state;
    const displayedTiles = reviews.slice(0, numberOfTiles);
    if (!isLoaded) {
      return <div>Loading Ratings and Reviews</div>;
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <div className="reviewsList">
          { displayedTiles.map((review, index) => <ReviewTile key={index} review={review} />) }
          {/* {buttonMaker('More Reviews', 'More Reviews', this.handleMoreReviews, this.hideButton)} */}
          {!this.hideButton ? <button type="button" className="buttonbutton" onClick={this.handleMoreReviews}>More Reviews</button> : null}
        </div>
      );
    }
  }
}

/*
function ReviewsList({ productId, page = 1, sort = 'relevant' }) {
  const [reviews, setReviews] = useState([]);
  const [mounted, setMounted] = useState(false);

  // runs everytime the component gets mounted
  useEffect(() => {
    if (!mounted) {
      getReviews();
    }
    return () => {
      setReviews([]); // prevents data leakage
    };
  }, [mounted]);

  const getReviews = async () => {
    const response = await request.getReviews(productId, page, sort);
    setMounted(true);
    console.log(response.data.results[0]);
    setReviews(response.data.results);
  };

  return mounted && reviews.length ? (
    <div id="reviewTiles">
      <ReviewTile review={response.data.results[0]} />
    </div>
  ) : (<div>No reviews currently...</div>);
}
*/
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
