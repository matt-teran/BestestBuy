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
  const [productInfo, setProductInfo] = useState({
    id: productId,
    features: [],
  });
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentImage, setCurrentImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sizeSelected, setSizeSelected] = useState('');
  const [quantitySelected, setQuantitySelected] = useState(null);
  const [currentSizeAndQuantity, setCurrentSizeAndQuantity] = useState({ value: null, label: 'Select size' });

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
        id: productId,
        category: data.category,
        title: data.title,
        slogan: data.slogan,
        description: data.description,
        features: data.features,
      }))
      .catch((err) => console.log('Failed to fetch product data', err));
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

  const selectQuantityHandler = (event) => setQuantitySelected(event);
  const showDropdownHandler = () => setShowDropdown(true);

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

  const changeMainImageHandler = (event) => {
    setCurrentImage(event.url);
    setImageIndex(event.thumbnailIndex);
  };

  useEffect(() => {
    fetchStyleData();
    fetchProductData();
  }, []);

  return (
    <div className="product_overview_block">
      <ImageGallery
        currentImage={currentImage}
        allThumbnail={currentStyle.photos}
        imageIndex={imageIndex}
        changeMainImage={changeMainImageHandler}
      />
      <ProductInformation
        productInfo={productInfo}
        price={currentStyle.original_price}
        salePrice={currentStyle.sale_price}
        currentImage={currentImage}
      />
      <StyleSelector
        styles={styles}
        selectStyle={selectStyleHandler}
        title={currentStyle.name}
        styleId={currentStyle.style_id}
      />
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
      <Share title={productInfo.title} currentImage={currentImage} />

      <ProductDetail productInfo={productInfo} />
    </div>
  );
}

ProductOverview.propTypes = {
  id: propTypes.string.isRequired,
};

export default ProductOverview;
