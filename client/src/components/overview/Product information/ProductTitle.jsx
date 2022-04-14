import React from 'react';
import PropTypes from 'prop-types';

function ProductTitle({ title }) {
  return (
    <div className="title">
      <h2 id="title">
        {' '}
        {title}
        {' '}
      </h2>
    </div>
  );
}

ProductTitle.propTypes = {
  title: PropTypes.string,
};

ProductTitle.defaultProps = {
  title: ' ',
};

export default ProductTitle;
