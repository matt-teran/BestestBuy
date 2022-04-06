import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';

function MainImage({ currentImage }) {
  return (
    <div>
      <img className="main_image" src={currentImage} alt="Product" />
    </div>
  );
}

MainImage.propTypes = {
  currentImage: PropTypes.string,
};

MainImage.defaultProps = {
  currentImage: '',
};

export default MainImage;
