import React from 'react';
import axios from 'axios';
import config from '../../config';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';

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
      price: '',
      features: [],
      rating: 0,
      review: 0,
      styles: [],
    };
  }

  componentDidMount() {
    this.fetchProductData();
    this.fetchStyleData();
    this.fetchRatingData();
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
        // console.log(productInfo.data);
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
      .then((styleInfo) => {
        // console.log(styleInfo.data);
        this.setState({
          styles: styleInfo.data.results,
        });
      });
  }

  fetchRatingData() {
    axios.get(
      `${url}reviews?product_id=${id}`,
      {
        headers: {
          Authorization: config.TOKEN,
        },
      },
    )
      .then((ratingInfo) => {
        // console.log(ratingInfo.data.results);
        if (ratingInfo.data.results.length === 0) {
          this.setState({
            rating: 0,
            review: 0,
          });
        } else {
          let totalRating = 0;
          ratingInfo.data.results.forEach((result) => { totalRating += result.rating; });
          this.setState({
            rating: totalRating / ratingInfo.data.results.length,
            review: ratingInfo.data.results.length,
          });
        }
      });
  }

  render() {
    const { category } = this.state;
    const { title } = this.state;
    const { slogan } = this.state;
    const { description } = this.state;
    const { price } = this.state;
    const { features } = this.state;
    const { rating } = this.state;
    const { review } = this.state;
    const { styles } = this.state;
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
            rating={rating}
            review={review}
          />
        </div>
        <div><StyleSelector styles={styles} /></div>
        <div>add to cart</div>
      </div>
    );
  }
}

export default ProductOverview;
