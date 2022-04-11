/* eslint-disable camelcase */
import axios from 'axios';
import { headers, url } from '../../config';

const axiosInfo = {
  method: 'PUT',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: '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'
  },
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/1155930/helpful',
}

const getReviews = function (productId, page = 1, sort = 'relevant') {
  // console.log('productId: ', productId, ' page: ', page, ' sort: ', sort); // for testing
  // console.log('Axios Request Made');

  return axios.get(`${url}/reviews?product_id=${productId}&page=${page}&sort=${sort}`, headers);
};

// this gets the metadata for RatingSummary
const getReviewsSummary = function (productId) {
  return axios.get(`${url}/reviews/meta?product_id=${productId}`, headers);
};

//Marks a specific review as helpful
const markHelpful = function (reviewId) {
  axios.put(`${url}/reviews/${reviewId}/helpful`, {}, headers)
    .catch((err) => {
      console.log(err);
    });
};

//Marks a specific review as helpful
const reportReview = function (reviewId) {
  axios.put(`${url}/reviews/${reviewId}/report`, {}, headers)
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
