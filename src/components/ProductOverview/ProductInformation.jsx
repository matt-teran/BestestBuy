import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProductCategory from './Product information/ProductCategory';
import ProductTitle from './Product information/ProductTitle';
import Price from './Product information/Price';
import StarRating from './Product information/StarRating';
import Cart from './Product information/Cart';

function ProductInformation({
  price, salePrice, productInfo,
}) {
  const [seen, setSeen] = useState(false);
  const [cart, setCart] = useState([{}]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(0);
  const toggleHandler = () => setSeen(!seen);

  const fetchRatingData = () => {
    axios.get(`${process.env.URL}/reviews/meta?product_id=${productInfo.id}`, {
      headers: {
        Authorization: process.env.KEY,
      },
    })
      .then(({ data }) => {
        if (Object.keys(data.ratings).length === 0) {
          setRating(0);
          setReview(0);
        } else {
          let totalRatings = 0;
          let totalReviews = 0;
          Object.entries(data.ratings).forEach(([k, v]) => {
            totalRatings += parseInt(k, 10) * parseInt(v, 10);
            totalReviews += parseInt(v, 10);
          });
          setRating(totalRatings / totalReviews);
          setReview(totalReviews);
        }
      })
      .catch((err) => console.log('Failed to fetch rating data', err));
  };

  const cartButton = () => {
    axios.get(`${process.env.URL}/cart`, {
      headers: {
        Authorization: process.env.KEY,
      },
    })
      .then(({ data }) => {
        setCart(data);
        toggleHandler();
      })
      .catch((err) => console.log('post fail', err));
  };

  useEffect(() => {
    fetchRatingData();
  }, []);

  return (
    <div className="product-information-block">
      <div>
        <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} onClick={cartButton} aria-hidden="true" />
      </div>
      <div>{seen ? <Cart toggle={toggleHandler} cart={cart} /> : null}</div>
      <div><StarRating rating={rating} review={review} /></div>
      <div><ProductCategory category={productInfo.category} /></div>
      <div><ProductTitle title={productInfo.title} /></div>
      <div><Price price={price} salePrice={salePrice} /></div>
    </div>
  );
}

ProductInformation.propTypes = {
  productInfo: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
  }),
  price: PropTypes.string,
  salePrice: PropTypes.string,
};

ProductInformation.defaultProps = {
  productInfo: {
    category: '',
    title: '',
  },
  price: '',
  salePrice: null,
};

export default ProductInformation;
