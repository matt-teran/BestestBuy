import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function LeftArrowButton({ imageIndex, allThumbnail, changeMainImage }) {
  if (imageIndex === 0) {
    return (
      <div> </div>
    );
  }

  return (
    <div>
      <span className="left-arrow">
        <FontAwesomeIcon icon={faAngleLeft} onClick={() => changeMainImage({ url: allThumbnail[imageIndex - 1].url, thumbnailIndex: imageIndex - 1 })} aria-hidden="true" />
      </span>
    </div>
  );
}

LeftArrowButton.propTypes = {
  imageIndex: PropTypes.number,
  allThumbnail: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
  changeMainImage: PropTypes.func,
};

LeftArrowButton.defaultProps = {
  allThumbnail: [{}],
  changeMainImage: () => {},
  imageIndex: 0,
};

export default LeftArrowButton;
