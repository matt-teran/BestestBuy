import React from 'react';
import ProductCard from './productCard/ProductCard';

import './RelatedProducts.scss';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="related-products">
        <ProductCard avgRating={0} price="140.00" name="Camo Onesie" category="Jackets" />
      </div>
    );
  }
}

export default RelatedProducts;
