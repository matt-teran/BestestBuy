import React from 'react';

import RelatedProductsList from './RelatedProductsList';
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
        <RelatedProductsList title="Related Products" />
        <RelatedProductsList title="Your Outfit" />
      </div>
    );
  }
}



export default RelatedProducts;
