import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import { Api_Key } from '../../config';
import RelatedProductsList from './RelatedProductsList';

import './RelatedProducts.scss';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedCards: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc';
    const header = {
      headers: {
        Authorization: Api_Key,
      },
    };
    axios.get(`${url}/products/${id}/related`, header)
      .then(({ data }) => Promise.all(data.map((_id) => axios.get(`${url}/products/${_id}`, header))))
      .then((data) => {
        const cards = data.map((res) => {
          const card = res.data;
          return {
            id: card.id,
            default_price: card.default_price,
            name: card.name,
            category: card.category,
          };
        });
        this.setState({relatedCards: cards});
      })
      // .then((cards) => {
      //   cards.map((card) => axios.get(`${url}/reviews/meta?product_id=${card.id}`, header)
      //     .then(({ data }) => ({ ...cards, avgRating: this.getAvgRating(data.ratings) }))
      //     .catch((err) => { console.log(err); }));
      // })
      .catch((err) => { console.log(err); });
  }

  // getAvgRating(ratings) {
  //   const ratingsArray = Object.keys(ratings);
  //   if (ratingsArray.length === 0) {
  //     return -1;
  //   }
  //   let total = 0;
  //   let numberOfRatings = 0;
  //   ratingsArray.forEach((stars) => {
  //     numberOfRatings += Number(ratings[stars]);
  //     total += stars * Number(ratings[stars]);
  //   });
  //   return total / numberOfRatings;
  // }

  render() {
    const { relatedCards } = this.state;
    return (
      <div className="related-products">
        {relatedCards.length === 0 ? <div>Loading...</div> : <RelatedProductsList title="Related Products" relatedCards={relatedCards} />}
      </div>
    );
  }
}

export default RelatedProducts;

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};
