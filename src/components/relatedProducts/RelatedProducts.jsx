import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import { url, headers } from '../../config';
import RelatedProductsList from './RelatedProductsList';
import Modal from '../ui/Modal/Modal';
import Backdrop from '../ui/Modal/Backdrop';
import Comparison from './comparisonModal/comparison/Comparison';

import './RelatedProducts.scss';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedCards: [],
      outfitCards: [],
      showModal: true,
    };
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  getRelatedProducts() {
    const { id } = this.props;

    function getAvgRating(ratings) {
      const ratingsArray = Object.keys(ratings);
      if (ratingsArray.length === 0) {
        return -1;
      }
      let total = 0;
      let numberOfRatings = 0;
      ratingsArray.forEach((stars) => {
        numberOfRatings += Number(ratings[stars]);
        total += stars * Number(ratings[stars]);
      });
      return total / numberOfRatings;
    }

    let cards;
    axios.get(`${url}/products/${id}/related`, headers)
      .then(({ data }) => Promise.all(data.map((_id) => axios.get(`${url}/products/${_id}`, headers))))
      .then((data) => {
        cards = data.map((res) => {
          const card = res.data;
          return {
            id: card.id,
            default_price: card.default_price,
            name: card.name,
            category: card.category,
          };
        });
      })
      .then(() => Promise.all(cards.map((card) => axios.get(`${url}/products/${card.id}/styles`, headers))))
      .then((res) => {
        cards = cards.map((card, i) => ({
          ...card,
          image: res[i].data.results[0].photos[0].thumbnail_url,
        }));
      })
      .then(() => Promise.all(cards.map((card) => axios.get(`${url}/reviews/meta?product_id=${card.id}`, headers))))
      .then((res) => {
        this.setState({
          relatedCards: cards.map((card, i) => ({
            ...card,
            avgRating: getAvgRating(res[i].data.ratings),
          })),
        });
      })
      .catch((err) => { console.log(err); });
  }

  openModal(comparedId) {
    const { id } = this.props;
    Promise.all([id, comparedId].map((productId) => axios.get(`${url}/products/${productId}`, headers).catch((err) => { console.log(err); })))
      .then((res) => { console.log(res); })
      .catch((err) => { console.log(err); });
    this.setState({ showModal: true });
  }

  render() {
    const { relatedCards, outfitCards, showModal } = this.state;
    return (
      <>
        <Modal showModal={showModal}>
          <Comparison />
        </Modal>
        <Backdrop showModal={showModal} clickHandler={() => this.setState({ showModal: false })} />
        <div className="related-products">
          {relatedCards.length === 0 ? <div>Loading...</div> : <RelatedProductsList title="Related Products" relatedCards={relatedCards} openModal={this.openModal} />}
          <RelatedProductsList title="Outfit List" relatedCards={outfitCards} openModal={this.openModal} />
        </div>
      </>
    );
  }
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};

export default RelatedProducts;
