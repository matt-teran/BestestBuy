import React from 'react';
import PropTypes from 'prop-types';

function ProductTitle({ title }) {
  return (
    <div>
      <h4>
        {' '}
        {title}
        {' '}
      </h4>
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
