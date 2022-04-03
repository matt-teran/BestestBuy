import React, { useEffect, useState } from 'react';
import request from './requests';
import ReviewTile from './ReviewTile';
import 'regenerator-runtime/runtime';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTiles: 2,
      reviews: [],
      isLoaded: true,
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    if (productId && this.state.isLoaded) {
      request.getReviews(productId)
        .then(({ data }) => {
          console.log(data.results);
          this.setState({
            isLoaded: false,
            reviews: data.results,
          });
        }); // need a catch here
    }
  }

  render() {
    let { isLoaded, numberOfTiles, reviews } = this.state;
    if (isLoaded) {
      return <div>Loading Ratings and Reviews</div>;
      // eslint-disable-next-line no-else-return
    } else {
      return (
        <div>
          <p>Total: {reviews.length}</p>
          {reviews.map((review, index) => <ReviewTile key={index} review={review} />)}
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

// The most commonly used react hooks: useState, useEffect, useContext (useContext is okay not to learn right now)
export default ReviewsList;

