import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function StyleThumbnail({ style, selectStyle, title }) {
  if (style.name === title) {
    return (
      <div>
        <img
          className="style_thumbnail"
          src={style.photos[0].thumbnail_url}
          alt="This is style thumbnail"
          onClick={() => selectStyle(style)}
          aria-hidden="true"
        />
        <span>
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
      </div>
    );
  }
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
  title: PropTypes.string,
};

StyleThumbnail.defaultProps = {
  style: {},
  selectStyle: '',
  title: '',
};

export default StyleThumbnail;
