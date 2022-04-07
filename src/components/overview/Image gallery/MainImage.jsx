import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';

function MainImage({ currentImage, imageSize, expandView }) {
  return (
    <div>
      <img
        className="main-image"
        src={currentImage}
        alt="Product"
        style={{ width: imageSize }}
        onClick={() => expandView()}
        aria-hidden="true"
      />
    </div>
  );
}

MainImage.propTypes = {
  currentImage: PropTypes.string,
  imageSize: PropTypes.string,
  expandView: PropTypes.func,
};

MainImage.defaultProps = {
  currentImage: '',
  imageSize: '',
  expandView: () => {},
};

export default MainImage;
