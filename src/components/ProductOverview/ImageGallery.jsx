import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainImage from './Image gallery/MainImage';
import ThumbnailImage from './Image gallery/ThumbnailImges';
import LeftArrowButton from './Image gallery/LeftArrowButton';
import RightArrowButton from './Image gallery/RightArrowButton';
import './ProductOverview.scss';

function ImageGallery({
  currentImage, allThumbnail, changeMainImage, imageIndex,
}) {
  const [expand, setExpand] = useState(false);
  const expandHandler = (bool) => setExpand(bool);
  return (
    <div className="image-block" style={{ gridRow: expand ? '1' : '1/5' }}>
      <div className="all-image-block">
        <div className="image">
          <MainImage
            currentImage={currentImage}
            imageSize={expand ? '1000px' : '600px'}
            viewExpanded={expand}
            expandView={() => expandHandler(true)}
            normalView={() => expandHandler(false)}
          />
        </div>
        <div className="right-arrow-button" style={{ marginLeft: expand ? '925px' : '45px' }}>
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
              viewExpanded={expand}
              changeMainImage={(event) => changeMainImage(event)}
            />
          ))
        }
        </div>
      </div>
      {' '}

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
