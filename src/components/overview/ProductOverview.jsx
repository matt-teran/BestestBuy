import React from 'react';
import axios from 'axios';
import config from '../../config';
import ProductInformation from './ProductInformation';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';
const id = '66642';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      slogan: '',
      description: '',
    };
  }

  componentDidMount() {
    this.fetchProductData();
  }

  fetchProductData() {
    axios.get(
      `${url}products/${id}`,
      {
        headers: {
          Authorization: config.TOKEN,
        },
      },
    )
      .then((productInfo) => {
        this.setState({
          category: productInfo.data.category,
          title: productInfo.data.name,
          slogan: productInfo.data.slogan,
          description: productInfo.data.description,
        });
      })
      .catch();
  }

  render() {
    const { category } = this.state;
    const { title } = this.state;
    const { slogan } = this.state;
    const { description } = this.state;
    return (
      <div className="product_overview_block">
        <div>ImageGallery</div>
        <div>
          <ProductInformation
            category={category}
            title={title}
            slogan={slogan}
            description={description}
          />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
