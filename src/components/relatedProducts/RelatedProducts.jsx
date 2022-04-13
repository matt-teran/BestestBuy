import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Cookies from 'js-cookie';

import { url, headers } from '../../config';
// import RelatedProductsList from './RelatedProductsList';
import ProductsList from './ProductsList';
import Modal from '../ui/Modal/Modal';
import Backdrop from '../ui/Modal/Backdrop';
import Comparison from './comparisonModal/comparison/Comparison';

import './RelatedProducts.scss';
import AddToOutfit from './productCard/AddToOutfit';

function RelatedProducts({ id }) {
  const [relatedCards, setRelatedCards] = useState([]);
  const [outfitCards, setOutfitCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProductInfo, setCurrentProductInfo] = useState(null);
  const [comparedProductInfo, setComparedProductInfo] = useState(null);

  const getCurrentProductInfo = () => {
    axios.get(`${url}/products/${id}`, headers)
      .then(({ data }) => setCurrentProductInfo(data))
      .catch((err) => { console.log(err); });
  };
  const getAvgRating = (ratings) => {
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
  };
  const getInfoFromIdArray = (ids) => {
    let cards;
    return axios.all(ids.map((_id) => axios.get(`${url}/products/${_id}`, headers)))
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
      .then(() => axios.all(cards.map((card) => axios.get(`${url}/products/${card.id}/styles`, headers))))
      .then((res) => {
        cards = cards.map((card, i) => ({
          ...card,
          image: res[i].data.results[0].photos[0].thumbnail_url,
        }));
      })
      .then(() => axios.all(cards.map((card) => axios.get(`${url}/reviews/meta?product_id=${card.id}`, headers))))
      .then((res) => cards.map((card, i) => ({
        ...card,
        avgRating: getAvgRating(res[i].data.ratings),
      })))
      .catch((err) => { console.log(err); });
  };
  const getRelatedProducts = () => {
    axios.get(`${url}/products/${id}/related`, headers)
      .then(({ data }) => {
        const ids = [...new Set(data)];
        return getInfoFromIdArray(ids);
      })
      .then((cards) => {
        setRelatedCards(cards);
      })
      .catch((err) => { console.log(err); });
  };
  const setOutfitCookieAsState = () => {
    if (!Object.keys(Cookies.get()).includes('outfit')) {
      Cookies.set('outfit', JSON.stringify([]));
      setOutfitCards(JSON.parse(Cookies.get('outfit')));
    } else {
      const outfitIds = JSON.parse(Cookies.get('outfit'));
      getInfoFromIdArray(outfitIds)
        .then((cards) => {
          setOutfitCards(cards);
        })
        .catch((err) => { console.log(err); });
    }
  };
  const openModal = (comparedId) => {
    axios.get(`${url}/products/${comparedId}`, headers)
      .then(({ data }) => {
        setComparedProductInfo(data);
        setShowModal(true);
      })
      .catch((err) => { console.log(err); });
  };
  const addToOutfit = () => {
    const updatedOutfitCards = [...new Set([id, ...JSON.parse(Cookies.get('outfit'))])];
    Cookies.set('outfit', JSON.stringify(updatedOutfitCards));
    setOutfitCookieAsState();
  };
  const removeFromOutfit = (_id) => {
    const updatedOutfitCards = JSON.parse(Cookies.get('outfit')).filter((outfitId) => outfitId !== _id.toString());
    Cookies.set('outfit', JSON.stringify(updatedOutfitCards));
    setOutfitCookieAsState();
  };

  useEffect(() => {
    getRelatedProducts();
    getCurrentProductInfo();
    setOutfitCookieAsState();
  }, []);

  if (relatedCards.length === 0) {
    return <div className="related-products-loading">Loading...</div>;
  }
  return (
    <>
      <Modal showModal={showModal}>
        {currentProductInfo && comparedProductInfo
          ? (
            <Comparison
              currentProduct={currentProductInfo.features}
              comparedProduct={comparedProductInfo.features}
            />
          )
          : null}
      </Modal>
      <Backdrop showModal={showModal} clickHandler={() => setShowModal(false)} />
      <div className="related-products">
        <ProductsList title="Related Products" cards={relatedCards} clickHandler={openModal} />
        <ProductsList className="outfit-list" title="Outfit List" cards={outfitCards} clickHandler={removeFromOutfit}>
          <AddToOutfit addToOutfit={addToOutfit} />
        </ProductsList>
      </div>
    </>
  );
}

RelatedProducts.propTypes = {
  id: propTypes.string.isRequired,
};

export default RelatedProducts;
