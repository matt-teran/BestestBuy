/* eslint-disable camelcase */
import axios from 'axios';
import { headers, url } from '../../config';

const getReviews = function (productId, page = 1, sort = 'relevant') {
  // console.log('productId: ', productId, ' page: ', page, ' sort: ', sort); // for testing
  // console.log('Axios Request Made');

  return axios.get(`${url}/reviews?product_id=${productId}&page=${page}&sort=${sort}`, headers);
};

// this gets the metadata for RatingSummary
const getReviewsSummary = function (productId) {
  return axios.get(`${url}/reviews/meta?product_id=${productId}`, headers);
};

export default { getReviews, getReviewsSummary };
