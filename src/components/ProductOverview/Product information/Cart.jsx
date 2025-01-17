import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductInformation.scss';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    const { cart } = this.props;
    this.state = {
      shoppingCart: cart,
    };
  }

  render() {
    const { shoppingCart } = this.state;
    const { toggle } = this.props;
    return (
      <div className="overview-modal">
        <div className="cart-content">
          <span className="close" onClick={toggle} aria-hidden="true">&times;</span>
          <h3>Shopping Cart</h3>
          <div className="items-in-cart">
            {
            shoppingCart.map((item) => (
              <p key={item.sku_id}>
                Style Id:
                {' '}
                {item.sku_id}
                {' '}
                --------
                Quantity:
                {' '}
                {item.count}
              </p>
            ))
          }
          </div>
          <button type="submit" className="checkout-button">Check Out</button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  toggle: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.shape({})),
};

Cart.defaultProps = {
  toggle: () => {},
  cart: [{}],
};
