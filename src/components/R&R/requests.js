/* eslint-disable camelcase */
import axios from 'axios';
import { headers, url } from '../../config';

const getReviews = function (productId, page = 1, sort = 'relevant') {
  // console.log('productId: ', productId, ' page: ', page, ' sort: ', sort); // for testing

  return axios.get(`${url}/reviews?product_id=${productId}&page=${page}&sort=${sort}`, headers);
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
