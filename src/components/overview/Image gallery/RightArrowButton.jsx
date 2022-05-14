import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function RightArrowButton({ imageIndex, allThumbnail, changeMainImage }) {
  // if there is only one image, don't display right arrow button
  if (imageIndex === 0 && imageIndex === allThumbnail.length - 1) {
    return (
      <div> </div>
    );
  }
  // if current image is the last image, don't display right arrow button
  if (imageIndex === allThumbnail.length - 1) {
    return (
      <div> </div>
    );
  }
  // otherwise, display right arrow button
  return (
    <div>
      <span className="right-arrow">
        <FontAwesomeIcon icon={faAngleRight} onClick={() => changeMainImage({ url: allThumbnail[imageIndex + 1].url, thumbnailIndex: imageIndex + 1 })} aria-hidden="true" />
      </span>
    </div>
  );
}

RightArrowButton.propTypes = {
  imageIndex: PropTypes.number,
  allThumbnail: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
  changeMainImage: PropTypes.func,
};

RightArrowButton.defaultProps = {
  allThumbnail: [{}],
  changeMainImage: () => {},
  imageIndex: 0,
};

export default RightArrowButton;
