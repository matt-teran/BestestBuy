/* eslint-disable camelcase */
const axios = require('axios');
const { Api_Key } = require('./config');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

const getData = function () {
  let body = {
    page: 1,
    count: 5,
    sort: 'newest',
    product: 2,
  };

  return axios.get(url + 'reviews?product_id=66642&sort=relevant&page=1', {
    headers: {
      Authorization: Api_Key,
    },
  });
};

module.exports = {
  getData,
};
