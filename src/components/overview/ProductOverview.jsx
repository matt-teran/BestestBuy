import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { headers, url } from '../../config';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import AddtoCart from './AddtoCart';
import ImageGallery from './ImageGallery';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      productId: id,
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
      currentImage: '',
      allThumbnail: [],
      imageIndex: 0,
    };
  }

  componentDidMount() {
    this.fetchProductData();
    this.fetchStyleData();
    this.fetchRatingData();
  }

  fetchProductData() {
    const { productId } = this.state;
    axios.get(
      `${url}/products/${productId}`,
      headers,
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
      .catch((err) => console.log('Failed to fetch product data', err));
  }

  fetchStyleData() {
    const { productId } = this.state;
    axios.get(
      `${url}/products/${productId}/styles`,
      headers,
    )
      .then((styleInfo) => {
        // console.log(styleInfo.data);
        this.setState({
          styles: styleInfo.data.results,
          currentImage: styleInfo.data.results[0].photos[0].url,
          allThumbnail: styleInfo.data.results[0].photos,
        });
      })
      .catch((err) => console.log('Failed to fetch style data', err));
  }

  fetchRatingData() {
    const { productId } = this.state;
    axios.get(
      `${url}/reviews/meta?product_id=${productId}`,
      headers,
    )
      .then((ratingInfo) => {
        if (Object.keys(ratingInfo.data.ratings).length === 0) {
          this.setState({
            rating: 0,
            review: 0,
          });
        } else {
          let totalRatings = 0;
          let totalReviews = 0;
          // ratingInfo.data.results.forEach((result) => { totalRating += result.rating; });
          const starArray = Object.keys(ratingInfo.data.ratings);
          const voteArray = Object.values(ratingInfo.data.ratings);
          for (let i = 0; i < Object.keys(ratingInfo.data.ratings).length; i += 1) {
            totalRatings += parseInt(starArray[i], 10) * parseInt(voteArray[i], 10);
            totalReviews += parseInt(voteArray[i], 10);
          }
          this.setState({
            rating: totalRatings / totalReviews,
            review: totalReviews,
          });
        }
      })
      .catch((err) => console.log('Failed to fetch rating data', err));
  }

  selectStyle(event) {
    this.setState({
      currentStyle: event,
      allThumbnail: event.photos,
      currentImage: event.photos[0].url,
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

  changeMainImage(event) {
    this.setState({
      currentImage: event.url,
      imageIndex: event.thumbnailIndex,
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
    const { currentStyle } = this.state;
    const { currentSizeAndQuantity } = this.state;
    const { currentImage } = this.state;
    const { allThumbnail } = this.state;
    const { imageIndex } = this.state;

    return (
      <div className="product_overview_block">
        <div>
          <ImageGallery
            currentImage={currentImage}
            allThumbnail={allThumbnail}
            imageIndex={imageIndex}
            changeMainImage={(event) => this.changeMainImage(event)}
            arrowChangeImage={(event) => this.arrowChangeImage(event)}
          />
        </div>
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

ProductOverview.propTypes = {
  id: propTypes.string.isRequired,
};

export default ProductOverview;
