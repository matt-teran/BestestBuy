/* eslint-disable camelcase */
import axios from 'axios';
// import { headers, url } from '../../config';

const getReviews = function (productId, page = 1, sort = 'relevant') {
  // console.log('productId: ', productId, ' page: ', page, ' sort: ', sort); // for testing
  // console.log('Axios Request Made');

  return axios.get(
    `${process.env.URL}/reviews?product_id=${productId}&page=${page}&sort=${sort}`,
    {
      headers: {
        Authorization: process.env.KEY,
      },
    },
  );
};

// this gets the metadata for RatingSummary
const getReviewsSummary = function (productId) {
  return axios.get(`${process.env.URL}/reviews/meta?product_id=${productId}`, {
    headers: {
      Authorization: process.env.KEY,
    },
  });
};

// Marks a specific review as helpful
const markHelpful = function (reviewId) {
  axios
    .put(
      `${process.env.URL}/reviews/${reviewId}/helpful`,
      {},
      {
        headers: {
          Authorization: process.env.KEY,
        },
      },
    )
    .catch((err) => {
      console.log(err);
    });
};

// Marks a specific review as helpful
const reportReview = function (reviewId) {
  axios
    .put(
      `${process.env.URL}/reviews/${reviewId}/report`,
      {},
      {
        headers: {
          Authorization: process.env.KEY,
        },
      },
    )
    .then(() => {
      console.log('Review Reported');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getReviews,
  getReviewsSummary,
  markHelpful,
  reportReview,
};
