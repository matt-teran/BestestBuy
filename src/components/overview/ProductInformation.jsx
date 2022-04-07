import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProductCategory from './Product information/ProductCategory';
import ProductTitle from './Product information/ProductTitle';
import ProductDetail from './Product information/ProductDetail';
import Price from './Product information/Price';
import Share from './Product information/Share';
import StarRating from './Product information/StarRating';
import Cart from './Product information/Cart';

function ProductInformation({
  category, title, slogan, description, price,
  features, rating, review, salePrice, cartButton,
  togglePop, seen, cart,
}) {
  return (
    <div className="product_information_block">
      <div>
        <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} onClick={() => cartButton()} aria-hidden="true" />
      </div>
      <div>{seen ? <Cart toggle={() => togglePop()} cart={cart} /> : null}</div>
      <div><StarRating rating={rating} review={review} /></div>
      <div><ProductCategory category={category} /></div>
      <div><ProductTitle title={title} /></div>
      <div><Price price={price} salePrice={salePrice} /></div>
      <div><ProductDetail slogan={slogan} description={description} features={features} /></div>
      <div><Share title={title} /></div>
    </div>
  );
}

ProductInformation.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  slogan: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({})),
  price: PropTypes.string,
  rating: PropTypes.number,
  review: PropTypes.number,
  salePrice: PropTypes.string,
  cartButton: PropTypes.func,
  togglePop: PropTypes.func,
  seen: PropTypes.bool,
  cart: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductInformation.defaultProps = {
  category: '',
  title: '',
  slogan: '',
  description: '',
  features: [],
  price: '',
  rating: 0,
  review: 0,
  salePrice: null,
  cartButton: () => {},
  togglePop: () => {},
  seen: false,
  cart: [{}],
};

export default ProductInformation;
