import React from 'react';
import PropTypes from 'prop-types';

function StyleTitle({ title }) {
  return (
    <div>
      <p>
        Style:
        {' '}
        {title}
      </p>
    </div>
  );
}

StyleTitle.propTypes = {
  title: PropTypes.string,
};

StyleTitle.defaultProps = {
  title: '',
};

export default StyleTitle;
