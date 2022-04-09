import React from 'react';
import PropTypes from 'prop-types';
import './styleSelector.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function StyleThumbnail({ style, selectStyle, styleId }) {
  if (style.style_id === styleId) {
    return (
      <div>
        <img
          className="style-thumbnail"
          src={style.photos[0].thumbnail_url}
          alt="This is style thumbnail"
          onClick={() => selectStyle(style)}
          aria-hidden="true"
        />
        <span className="checkmark">
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
      </div>
    );
  }
  return (
    <div>
      <img
        className="style-thumbnail"
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
  styleId: PropTypes.number,
};

StyleThumbnail.defaultProps = {
  style: {},
  selectStyle: '',
  styleId: 0,
};

export default StyleThumbnail;
