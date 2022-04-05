import React from 'react';
import PropTypes from 'prop-types';

function StyleThumbnail({ style, selectStyle }) {
  return (
    <div>
      <img
        className="style_thumbnail"
        src={style.photos[0].thumbnail_url}
        alt="This is style thumbnail"
        onClick={() => selectStyle(style)}
        aria-hidden="true"
      />
    </div>
  );
}

StyleThumbnail.propTypes = {
  style: PropTypes.shape({}),
  selectStyle: PropTypes.func,
};

StyleThumbnail.defaultProps = {
  style: {},
  selectStyle: '',
};

export default StyleThumbnail;
