import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import swal from 'sweetalert';
// import { headers, url } from '../../config';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import AddtoCart from './AddtoCart';
import ImageGallery from './ImageGallery';
import ProductDetail from './Product information/ProductDetail';
import Share from './Product information/Share';

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
      salePrice: null,
      features: [],
      rating: 0,
      review: 0,
      styles: [],
      currentStyle: {},
      currentSizeAndQuantity: { value: null, label: 'Select size' },
      quantitySelected: null,
      sizeSelected: '',
      currentImage: '',
      allThumbnail: [],
      imageIndex: 0,
      imageSize: '600px',
      viewExpanded: false,
      seen: false,
      cart: [{}],
      grid: '1/5',
      open: false,
      rightArrowPosition: '45px',
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
      `${process.env.URL}/products/${productId}`,
      {
        headers: {
          Authorization: process.env.KEY,
        },
      },
    )
      .then((productInfo) => {
        this.setState({
          category: productInfo.data.category,
          title: productInfo.data.name,
          slogan: productInfo.data.slogan,
          description: productInfo.data.description,
          features: productInfo.data.features,
        });
      })
      .catch((err) => console.log('Failed to fetch product data', err));
  }

  fetchStyleData() {
    const { productId } = this.state;
    axios.get(
      `${process.env.URL}/products/${productId}/styles`,
      {
        headers: {
          Authorization: process.env.KEY,
        },
      },
    )
      .then((styleInfo) => {
        this.setState({
          styles: styleInfo.data.results,
          currentImage: styleInfo.data.results[0].photos[0].url,
          allThumbnail: styleInfo.data.results[0].photos,
          currentStyle: styleInfo.data.results[0],
          price: styleInfo.data.results[0].original_price,
          salePrice: styleInfo.data.results[0].sale_price,
        });
      })
      .catch((err) => console.log('Failed to fetch style data', err));
  }

  fetchRatingData() {
    const { productId } = this.state;
    axios.get(
      `${process.env.URL}/reviews/meta?product_id=${productId}`,
      {
        headers: {
          Authorization: process.env.KEY,
        },
      },
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

  // Interaction methods

  selectStyle(event) {
    this.setState({
      currentStyle: event,
      allThumbnail: event.photos,
      currentImage: event.photos[0].url,
      imageIndex: 0,
      price: event.original_price,
      salePrice: event.sale_price,
      currentSizeAndQuantity: { value: null, label: 'Select size' },
      quantitySelected: 1,
      open: false,
    });
  }

  selectSizeAndQuantity(event) {
    this.setState({
      currentSizeAndQuantity: event,
      sizeSelected: event.label,
      open: false,
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
    for (let i = 0; i < quantitySelected; i += 1) {
      axios.post(`${process.env.URL}/cart`, { sku_id: parseInt(skusId, 10), count: quantitySelected }, {
        headers: {
          Authorization: process.env.KEY,
        },
      })
        .then(() => console.log('add to cart successfully'))
        .catch((err) => console.log('post fail', err));
    }
    this.setState({
      currentSizeAndQuantity: { value: null, label: 'Select size' },
      quantitySelected: null,
    });
    swal('Add to bag successfully!', '', 'success');
  }

  cartButton() {
    axios.get(`${process.env.URL}/cart`, {
      headers: {
        Authorization: process.env.KEY,
      },
    })
      .then((results) => {
        this.setState({
          cart: results.data,
        });
      })
      .then(() => this.togglePop())
      .catch((err) => console.log('post fail', err));
  }

  togglePop() {
    const { seen } = this.state;
    this.setState({
      seen: !seen,
    });
  }

  changeMainImage(event) {
    this.setState({
      currentImage: event.url,
      imageIndex: event.thumbnailIndex,
    });
  }

  expandView() {
    this.setState({
      imageSize: '1000px',
      viewExpanded: true,
      grid: '1',
      rightArrowPosition: '925px',
    });
  }

  normalView() {
    this.setState({
      imageSize: '600px',
      viewExpanded: false,
      grid: '1/5',
      rightArrowPosition: '45px',
    });
  }

  openDropdown() {
    this.setState({
      open: true,
    });
    swal('Please select a size');
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
    const { salePrice } = this.state;
    const { imageSize } = this.state;
    const { viewExpanded } = this.state;
    const { seen } = this.state;
    const { cart } = this.state;
    const { grid } = this.state;
    const { open } = this.state;
    const { quantitySelected } = this.state;
    const { rightArrowPosition } = this.state;

    return (
      <div className="product_overview_block">
        <div className="image-block" style={{ gridRow: grid }}>
          <ImageGallery
            currentImage={currentImage}
            allThumbnail={allThumbnail}
            imageIndex={imageIndex}
            imageSize={imageSize}
            viewExpanded={viewExpanded}
            rightArrowPosition={rightArrowPosition}
            changeMainImage={(event) => this.changeMainImage(event)}
            arrowChangeImage={(event) => this.arrowChangeImage(event)}
            expandView={() => this.expandView()}
            normalView={() => this.normalView()}
          />
        </div>
        <div className="product_information_block">
          <ProductInformation
            category={category}
            title={title}
            slogan={slogan}
            description={description}
            features={features}
            price={price}
            salePrice={salePrice}
            rating={rating}
            review={review}
            seen={seen}
            cart={cart}
            currentImage={currentImage}
            togglePop={() => this.togglePop()}
            cartButton={() => this.cartButton()}
            scrollToView={() => this.scrollToView()}
          />
        </div>
        <div className="styles">
          <StyleSelector
            styles={styles}
            selectStyle={(event) => this.selectStyle(event)}
            title={currentStyle.name}
            styleId={currentStyle.style_id}
          />
        </div>
        <div className="add-to-cart">
          <AddtoCart
            sizeAndQuantity={currentStyle.skus}
            selectSizeAndQuantity={(event) => this.selectSizeAndQuantity(event)}
            currentSizeAndQuantity={currentSizeAndQuantity}
            selectQuantity={(event) => this.selectQuantity(event)}
            addToCart={() => this.addToCart()}
            openDropdown={() => this.openDropdown()}
            open={open}
            quantitySelected={quantitySelected}
          />
        </div>
        <div className="share"><Share title={title} currentImage={currentImage} /></div>
        <div className="product-detail"><ProductDetail slogan={slogan} description={description} features={features} /></div>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  id: propTypes.string.isRequired,
};

export default ProductOverview;
