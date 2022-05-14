import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
// import { GlassMagnifier } from 'react-image-magnifiers';
import LazyLoad from 'react-lazyload';

function MainImage({
  currentImage, imageSize, expandView, viewExpanded, normalView,
}) {
  // if view is expanded, change the size to 2.5 times larger and use glass magnifier
  // if (viewExpanded) {
  //   return (
  //     <div>
  //       <LazyLoad height={200}>
  //         <GlassMagnifier
  //           className="main-image"
  //           imageSrc={currentImage}
  //           imageAlt="Product"
  //           style={{ width: imageSize, height: 'auto' }}
  //           magnifierSize="25%"
  //         />
  //       </LazyLoad>
  //       <span className="normal-view-button" onClick={() => normalView()} aria-hidden="true">&times;</span>
  //     </div>
  //   );
  // }
  // display normal view, change cursor to a magnifying glass
  return (
    <div>
      <LazyLoad height={200}>
        <img
          className="main-image"
          src={currentImage}
          alt="Product"
          style={{ width: imageSize, height: imageSize, cursor: 'zoom-in' }}
          onClick={() => expandView()}
          aria-hidden="true"
        />
      </LazyLoad>
    </div>
  );
}

MainImage.propTypes = {
  currentImage: PropTypes.string,
  imageSize: PropTypes.string,
  expandView: PropTypes.func,
  viewExpanded: PropTypes.bool,
  normalView: PropTypes.func,
};

MainImage.defaultProps = {
  currentImage: '',
  imageSize: '',
  expandView: () => {},
  viewExpanded: false,
  normalView: () => {},
};

export default MainImage;
