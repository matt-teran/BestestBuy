import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';

function ThumbnailImage({ thumbnail, changeMainImage, index }) {
  return (
    <div>
      <img
        className="gallery_thumbnail"
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
};

ThumbnailImage.defaultProps = {
  thumbnail: {},
  changeMainImage: () => {},
  index: 0,
};

export default ThumbnailImage;
