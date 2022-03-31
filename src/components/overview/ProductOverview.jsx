import React from 'react';
import ProductInformation from './ProductInformation';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="product_overview_block">
        <div>ImageGallery</div>
        <div><ProductInformation /></div>
      </div>
    );
  }
}

export default ProductOverview;
