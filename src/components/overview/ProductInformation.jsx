import React from 'react';
import axios from 'axios';
import config from '../../config';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

const getData = () => {
  axios.get(
    `${url}products?page=1&count=5`,
    {
      headers: {
        Authorization: config.TOKEN,
      },
    },
  )
    .then((result) => console.log(result))
    .catch();
};

getData();

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="product_information_block">
        <div>Rating</div>
        <div>Category</div>
        <div>Title</div>
        <div>Price</div>
        <div>Detail</div>
        <div>Share</div>
      </div>
    );
  }
}

export default ProductInformation;
