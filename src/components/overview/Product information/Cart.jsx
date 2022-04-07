import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    const { toggle } = this.props;
    const { cart } = this.props;
    this.state = {
      togglePop: toggle,
      shoppingCart: cart,
    };
  }

  handleClick() {
    const { togglePop } = this.state;
    togglePop();
  }

  render() {
    const { shoppingCart } = this.state;
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={() => this.handleClick()} aria-hidden="true">&times;</span>
          <h3>Shopping Cart</h3>
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
          <button type="submit">Check Out</button>
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
