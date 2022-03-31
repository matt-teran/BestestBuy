import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="product_information_block">
        <div>Rating</div>
        <div>Category</div>
        <div>Title</div>
        <div>Price</div>
        <div>Detail</div>
        <div>Share</div>
      </div>
    );
  }
}

export default ProductInformation;
