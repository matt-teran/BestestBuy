import React, { useEffect, useState } from 'react';
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

function ProductOverview({ id }) {
  const [productId] = useState(id);
  const [productInfo, setProductInfo] = useState({});
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(0);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentImage, setCurrentImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [expand, setExpand] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sizeSelected, setSizeSelected] = useState('');
  const [quantitySelected, setQuantitySelected] = useState(null);
  const [currentSizeAndQuantity, setCurrentSizeAndQuantity] = useState({ value: null, label: 'Select size' });
  const [cart, setCart] = useState([{}]);
  const [seen, setSeen] = useState(false);

  // ------------------ fetch before product mounts
  function fetchStyleData() {
    axios.get(`${process.env.URL}/products/${productId}/styles`, {
      headers: { Authorization: process.env.KEY },
    })
      .then(({ data }) => {
        setStyles(data.results);
        setCurrentImage(data.results[0].photos[0].url);
        setCurrentStyle(data.results[0]);
      })
      .catch((err) => console.log('Failed to fetch style data', err));
  }
  const fetchProductData = () => {
    axios.get(`${process.env.URL}/products/${productId}`, {
      headers: {
        Authorization: process.env.KEY,
      },
    })
      .then(({ data }) => setProductInfo({
        category: data.category,
        title: data.title,
        slogan: data.slogan,
        description: data.description,
        features: data.features,
      }))
      .catch((err) => console.log('Failed to fetch product data', err));
  };
  const fetchRatingData = () => {
    axios.get(`${process.env.URL}/reviews/meta?product_id=${productId}`, {
      headers: {
        Authorization: process.env.KEY,
      },
    })
      .then(({ data }) => {
        if (Object.keys(data.ratings).length === 0) {
          setRating(0);
          setReview(0);
        } else {
          let totalRatings = 0;
          let totalReviews = 0;
          Object.entries(data.ratings).forEach(([k, v]) => {
            totalRatings += parseInt(k, 10) * parseInt(v, 10);
            totalReviews += parseInt(v, 10);
          });
          setRating(totalRatings / totalReviews);
          setReview(totalReviews);
        }
      })
      .catch((err) => console.log('Failed to fetch rating data', err));
  };

  const addToCartHandler = () => {
    let skusId;

    Object.entries(currentStyle.skus).forEach(([k, v]) => {
      if (v.label === sizeSelected) skusId = k;
    });

    for (let i = 0; i < quantitySelected; i += 1) {
      axios.post(`${process.env.URL}/cart`, { sku_id: parseInt(skusId, 10), count: quantitySelected }, {
        headers: {
          Authorization: process.env.KEY,
        },
      })
        .then(() => console.log('Added to Cart Successfully'))
        .catch((err) => console.log('post fail', err));
    }

    setCurrentSizeAndQuantity({ value: null, label: 'Select size' });
    setQuantitySelected(null);
    swal('Add to bag successfully!', '', 'success');
  };

  const expandHandler = (bool) => setExpand(bool);
  const selectQuantityHandler = (event) => setQuantitySelected(event);
  const showDropdownHandler = () => setShowDropdown(true);
  const togglePopHandler = () => setSeen(!seen);

  const selectSizeAndQuantityHandler = (event) => {
    setCurrentSizeAndQuantity(event);
    setSizeSelected(event.label);
    setShowDropdown(false);
  };

  const selectStyleHandler = (event) => {
    setCurrentStyle(event);
    setCurrentImage(event.photos[0].url);
    setImageIndex(0);
    setCurrentSizeAndQuantity({ value: null, label: 'Select size' });
    setQuantitySelected(1);
    setShowDropdown(false);
  };

  const cartButton = () => {
    axios.get(`${process.env.URL}/cart`, {
      headers: {
        Authorization: process.env.KEY,
      },
    })
      .then(({ data }) => {
        setCart(data);
        togglePopHandler();
      })
      .catch((err) => console.log('post fail', err));
  };

  const changeMainImageHandler = (event) => {
    setCurrentImage(event.url);
    setImageIndex(event.thumbnailIndex);
  };

  useEffect(() => {
    fetchStyleData();
    fetchProductData();
    fetchRatingData();
  }, []);

  return (
    <div className="product_overview_block">
      <div className="image-block" style={{ gridRow: expand ? '1' : '1/5' }}>
        <ImageGallery
          currentImage={currentImage}
          allThumbnail={currentStyle.photos}
          imageIndex={imageIndex}
          imageSize={expand ? '1000px' : '600px'}
          expand={expand}
          rightArrowPosition={expand ? '925px' : '45px'}
          changeMainImage={changeMainImageHandler}
          expandView={() => expandHandler(true)}
          normalView={() => expandHandler(false)}
        />
      </div>
      <div className="product_information_block">
        <ProductInformation
          productInfo={productInfo}
          price={currentStyle.original_price}
          salePrice={currentStyle.sale_price}
          rating={rating}
          review={review}
          seen={seen}
          cart={cart}
          currentImage={currentImage}
          togglePop={togglePopHandler}
          cartButton={cartButton}
        />
      </div>
      <div className="styles">
        <StyleSelector
          styles={styles}
          selectStyle={selectStyleHandler}
          title={currentStyle.name}
          styleId={currentStyle.style_id}
        />
      </div>
      <div className="add-to-cart">
        <AddtoCart
          sizeAndQuantity={currentStyle.skus}
          selectSizeAndQuantity={selectSizeAndQuantityHandler}
          currentSizeAndQuantity={currentSizeAndQuantity}
          selectQuantity={selectQuantityHandler}
          addToCart={addToCartHandler}
          openDropdown={showDropdownHandler}
          open={showDropdown}
          quantitySelected={quantitySelected}
        />
      </div>
      <div className="share"><Share title={productInfo.title} currentImage={currentImage} /></div>
      <div className="product-detail"><ProductDetail slogan={productInfo.slogan} description={productInfo.description} features={productInfo.features} /></div>
    </div>
  );
}

ProductOverview.propTypes = {
  id: propTypes.string.isRequired,
};

export default ProductOverview;
