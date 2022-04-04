import React from 'react';
import axios from 'axios';
import config from '../../config';
import ProductInformation from './ProductInformation';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';
const id = '66643';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      slogan: '',
      description: '',
      price: '',
      features: [],
    };
  }

  componentDidMount() {
    this.fetchProductData();
    this.fetchStyleData();
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
        console.log(productInfo.data);
        this.setState({
          category: productInfo.data.category,
          title: productInfo.data.name,
          slogan: productInfo.data.slogan,
          description: productInfo.data.description,
          price: productInfo.data.default_price,
          features: productInfo.data.features,
        });
      })
      .catch();
  }

  fetchStyleData() {
    axios.get(
      `${url}products/${id}/styles`,
      {
        headers: {
          Authorization: config.TOKEN,
        },
      },
    )
      .then((styleInfo) => console.log(styleInfo.data));
  }

  render() {
    const { category } = this.state;
    const { title } = this.state;
    const { slogan } = this.state;
    const { description } = this.state;
    const { price } = this.state;
    const { features } = this.state;
    return (
      <div className="product_overview_block">
        <div>ImageGallery</div>
        <div>
          <ProductInformation
            category={category}
            title={title}
            slogan={slogan}
            description={description}
            features={features}
            price={price}
          />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
