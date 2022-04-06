/* eslint-disable camelcase */
const axios = require('axios');
const { Api_Key } = require('../../config');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

const getReviews = function (productId, page = 1, sort = 'relevant') {
  // console.log('productId: ', productId, ' page: ', page, ' sort: ', sort); // for testing

  return axios.get(`${url}reviews?product_id=${productId}&page=${page}&sort=${sort}`, {
    headers: {
      Authorization: Api_Key,
    },
  });
};

// const getRequest = function() {

// }

// working request
/*
return axios.get(url + `reviews?product_id=66643`, {
    headers: {
      Authorization: Api_Key,
    },
  });
*/
// module.exports = {
//   getReviews,
// };

export default { getReviews };
