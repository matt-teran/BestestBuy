import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';

function ThumbnailImage({
  thumbnail, changeMainImage, index, viewExpanded,
}) {
  // if view is expaned, don't show thumbnail images
  if (viewExpanded) {
    return (
      <div> </div>
    );
  }
  // if view is normal, show thumbnail
  return (
    <div>
      <img
        className="gallery-thumbnail"
        src={thumbnail.thumbnail_url}
        alt="product thumbnail"
        onClick={() => changeMainImage({ url: thumbnail.url, thumbnailIndex: index })}
        aria-hidden="true"
      />
    </div>
  );
}

ThumbnailImage.propTypes = {
  thumbnail: PropTypes.shape({}),
  changeMainImage: PropTypes.func,
  index: PropTypes.number,
  viewExpanded: PropTypes.bool,
};

ThumbnailImage.defaultProps = {
  thumbnail: {},
  changeMainImage: () => {},
  index: 0,
  viewExpanded: false,
};

export default ThumbnailImage;
