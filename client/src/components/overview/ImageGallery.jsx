import React from 'react';
import PropTypes from 'prop-types';
import MainImage from './Image gallery/MainImage';
import ThumbnailImage from './Image gallery/ThumbnailImges';
import LeftArrowButton from './Image gallery/LeftArrowButton';
import RightArrowButton from './Image gallery/RightArrowButton';
import './ProductOverview.scss';

function ImageGallery({
  currentImage, allThumbnail, changeMainImage, imageIndex, imageSize,
  expandView, viewExpanded, normalView, rightArrowPosition,
}) {
  return (
    <div className="all-image-block">
      <div className="image">
        <MainImage
          currentImage={currentImage}
          imageSize={imageSize}
          viewExpanded={viewExpanded}
          expandView={() => expandView()}
          normalView={() => normalView()}
        />
      </div>
      <div className="right-arrow-button" style={{ marginLeft: rightArrowPosition }}>
        <RightArrowButton
          imageIndex={imageIndex}
          allThumbnail={allThumbnail}
          changeMainImage={(event) => changeMainImage(event)}
        />
      </div>
      <div className="left-arrow-button">
        <LeftArrowButton
          imageIndex={imageIndex}
          allThumbnail={allThumbnail}
          changeMainImage={(event) => changeMainImage(event)}
        />
      </div>
      <div className="image-thumbnails">
        {
          allThumbnail.map((thumbnail, index) => (
            <ThumbnailImage
              key={thumbnail.url}
              index={index}
              thumbnail={thumbnail}
              viewExpanded={viewExpanded}
              changeMainImage={(event) => changeMainImage(event)}
            />
          ))
        }
      </div>
    </div>
  );
}

ImageGallery.propTypes = {
  currentImage: PropTypes.string,
  allThumbnail: PropTypes.arrayOf(PropTypes.shape({})),
  changeMainImage: PropTypes.func,
  imageIndex: PropTypes.number,
  imageSize: PropTypes.string,
  expandView: PropTypes.func,
  viewExpanded: PropTypes.bool,
  normalView: PropTypes.func,
  rightArrowPosition: PropTypes.string,
};

ImageGallery.defaultProps = {
  currentImage: '',
  allThumbnail: [{}],
  changeMainImage: () => {},
  imageIndex: 0,
  imageSize: '',
  expandView: () => {},
  viewExpanded: false,
  normalView: () => {},
  rightArrowPosition: '45px',
};

export default ImageGallery;
