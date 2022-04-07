import React from 'react';
import PropTypes from 'prop-types';
import MainImage from './Image gallery/MainImage';
import ThumbnailImage from './Image gallery/ThumbnailImges';
import ArrowButton from './Image gallery/ArrowButton';
import './ProductOverview.scss';

function ImageGallery({
  currentImage, allThumbnail, changeMainImage, imageIndex,
}) {
  return (
    <div>
      <MainImage currentImage={currentImage} />
      <ArrowButton
        imageIndex={imageIndex}
        allThumbnail={allThumbnail}
        changeMainImage={(event) => changeMainImage(event)}
      />
      <div className="image-thumbnails">
        {
          allThumbnail.map((thumbnail, index) => (
            <ThumbnailImage
              key={thumbnail.url}
              index={index}
              thumbnail={thumbnail}
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
};

ImageGallery.defaultProps = {
  currentImage: '',
  allThumbnail: [{}],
  changeMainImage: () => {},
  imageIndex: 0,
};

export default ImageGallery;
