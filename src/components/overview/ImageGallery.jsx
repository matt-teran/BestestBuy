import React from 'react';
import PropTypes from 'prop-types';
import MainImage from './Image gallery/MainImage';
import ThumbnailImage from './Image gallery/ThumbnailImges';

function ImageGallery({ currentImage, allThumbnail, changeMainImage }) {
  return (
    <div>
      <MainImage currentImage={currentImage} />
      <div>
        {
          allThumbnail.map((thumbnail) => (
            <ThumbnailImage
              key={thumbnail.url}
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
};

ImageGallery.defaultProps = {
  currentImage: '',
  allThumbnail: [{}],
  changeMainImage: () => {},
};

export default ImageGallery;
