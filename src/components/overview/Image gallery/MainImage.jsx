import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';

function MainImage({
  currentImage, imageSize, expandView, viewExpanded, normalView,
}) {
  // if view is expanded, change the size to 2.5 times larger and change cursor to +
  if (viewExpanded) {
    return (
      <div>
        <img
          className="main-image"
          src={currentImage}
          alt="Product"
          style={{ width: imageSize, height: imageSize, cursor: 'crosshair' }}
          onClick={() => expandView()}
          aria-hidden="true"
        />
        <span className="normal-view-button" onClick={() => normalView()} aria-hidden="true">-</span>
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
