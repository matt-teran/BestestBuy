/* eslint-disable camelcase */
const axios = require('axios');
const { Api_Key } = require('../../config');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

const getReviews = function (productId, page, sort) {
  console.log('productId: ', productId, ' page: ', page, ' sort: ', sort);
  // return axios.get(url + `reviews?product_id=${productId}&page=${page}&sort=${sort}`, {
  //   headers: {
  //     Authorization: Api_Key,
  //   },
  // });
};

// let body = {
//   page: 1,
//   count: 5,
//   sort: 'newest',
//   product: 2,
// };

module.exports = {
  getReviews,
};
