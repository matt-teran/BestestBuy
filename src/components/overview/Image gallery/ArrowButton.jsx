import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';

function ArrowButton({ imageIndex, allThumbnail, changeMainImage }) {
  // this is the first image, then only show right arrow
  if (imageIndex === 0) {
    return (
      <div>
        <span className="right_arrow">
          <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex + 1].url, thumbnailIndex: imageIndex + 1 })} aria-hidden="true">⇨</p>
        </span>
      </div>
    );
  }
  // this is the last image, then only show left arrow
  if (imageIndex === allThumbnail.length - 1) {
    return (
      <div>
        <span className="left_arrow">
          <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex - 1].url, thumbnailIndex: imageIndex - 1 })} aria-hidden="true">⇦</p>
        </span>
      </div>
    );
  }
  // otherwise, show both arrow
  return (
    <div>
      <span className="left_arrow">
        <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex - 1].url, thumbnailIndex: imageIndex - 1 })} aria-hidden="true">⇦</p>
      </span>
      <span className="right_arrow">
        <p onClick={() => changeMainImage({ url: allThumbnail[imageIndex + 1].url, thumbnailIndex: imageIndex + 1 })} aria-hidden="true">⇨</p>
      </span>
    </div>
  );
}

ArrowButton.propTypes = {
  imageIndex: PropTypes.number,
  allThumbnail: PropTypes.arrayOf(PropTypes.shape({})),
  changeMainImage: PropTypes.func,
};

ArrowButton.defaultProps = {
  allThumbnail: [{}],
  changeMainImage: () => {},
  imageIndex: 0,
};

export default ArrowButton;
