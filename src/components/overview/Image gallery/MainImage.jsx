import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import { GlassMagnifier } from 'react-image-magnifiers';

function MainImage({
  currentImage, imageSize, expandView, viewExpanded, normalView,
}) {
  // if view is expanded, change the size to 2.5 times larger and change cursor to +
  if (viewExpanded) {
    return (
      <div>
        <GlassMagnifier
          className="main-image"
          imageSrc={currentImage}
          imageAlt="Product"
          style={{ width: imageSize, height: 'auto' }}
          magnifierSize="25%"
        />
        <span className="normal-view-button" onClick={() => normalView()} aria-hidden="true">X</span>
      </div>
    );
  }
  // display normal view, change cursor to a magnifying glass
  return (
    <div>
      <img
        className="main-image"
        src={currentImage}
        alt="Product"
        style={{ width: imageSize, height: imageSize, cursor: 'zoom-in' }}
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
  viewExpanded: PropTypes.bool,
  normalView: PropTypes.func,
};

MainImage.defaultProps = {
  currentImage: '',
  imageSize: '',
  expandView: () => {},
  viewExpanded: false,
  normalView: () => {},
};

export default MainImage;
