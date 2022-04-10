import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';

function ArrowButton({ imageIndex, allThumbnail, changeMainImage }) {
  if (imageIndex === 0 && imageIndex === allThumbnail.length - 1) {
    return (
      <div> </div>
    );
  }
  // this is the first image, then only show right arrow
  if (imageIndex === 0) {
    return (
      <div>
        <span className="right-arrow">
          <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex + 1].url, thumbnailIndex: imageIndex + 1 })} aria-hidden="true">⇨</p>
        </span>
      </div>
    );
  }
  // this is the last image, then only show left arrow
  if (imageIndex === allThumbnail.length - 1) {
    return (
      <div>
        <span className="left-arrow">
          <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex - 1].url, thumbnailIndex: imageIndex - 1 })} aria-hidden="true">⇦</p>
        </span>
      </div>
    );
  }
  // otherwise, show both arrow
  return (
    <div>
      <span className="left-arrow">
        <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex - 1].url, thumbnailIndex: imageIndex - 1 })} aria-hidden="true">⇦</p>
      </span>
      <span className="right-arrow">
        <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex + 1].url, thumbnailIndex: imageIndex + 1 })} aria-hidden="true">⇨</p>
      </span>
    </div>
  );
}

ArrowButton.propTypes = {
  imageIndex: PropTypes.number,
  allThumbnail: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
  changeMainImage: PropTypes.func,
};

ArrowButton.defaultProps = {
  allThumbnail: [{}],
  changeMainImage: () => {},
  imageIndex: 0,
};

export default ArrowButton;
