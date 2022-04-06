import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';

function ThumbnailImage({ thumbnail, changeMainImage }) {
  return (
    <div>
      <img
        className="gallery_thumbnail"
        src={thumbnail.thumbnail_url}
        alt="product thumbnail"
        onClick={() => changeMainImage(thumbnail.url)}
        aria-hidden="true"
      />
    </div>
  );
}

ThumbnailImage.propTypes = {
  thumbnail: PropTypes.shape({}),
  changeMainImage: PropTypes.func,
};

ThumbnailImage.defaultProps = {
  thumbnail: {},
  changeMainImage: () => {},
};

export default ThumbnailImage;
