import React from 'react';
import axios from 'axios';
import config from '../../config';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import AddtoCart from './AddtoCart';

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
      currentStyle: {},
      currentSizeAndQuantity: {},
      quantitySelected: 0,
      sizeSelected: '',
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

  selectStyle(event) {
    this.setState({
      currentStyle: event,
    });
  }

  selectSizeAndQuantity(event) {
    this.setState({
      currentSizeAndQuantity: event,
      sizeSelected: event.label,
    });
  }

  selectQuantity(event) {
    this.setState({
      quantitySelected: event,
    });
  }

  addToCart() {
    const { currentStyle } = this.state;
    const { sizeSelected } = this.state;
    const { quantitySelected } = this.state;
    let skusId;
    const sizeArray = Object.values(currentStyle.skus);
    const sizeNumber = Object.keys(currentStyle.skus);
    for (let i = 0; i < sizeArray.length; i += 1) {
      if (sizeArray[i].label === sizeSelected) {
        skusId = sizeNumber[i];
      }
    }
    console.log(skusId);
    console.log(quantitySelected);
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
    const { currentStyle } = this.state;
    const { currentSizeAndQuantity } = this.state;

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
        <div>
          <StyleSelector
            styles={styles}
            selectStyle={(event) => this.selectStyle(event)}
            title={currentStyle.name}
          />
        </div>
        <div>
          <AddtoCart
            sizeAndQuantity={currentStyle.skus}
            selectSizeAndQuantity={(event) => this.selectSizeAndQuantity(event)}
            currentSizeAndQuantity={currentSizeAndQuantity}
            selectQuantity={(event) => this.selectQuantity(event)}
            addToCart={() => this.addToCart()}
          />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
