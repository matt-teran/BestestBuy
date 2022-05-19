import React from 'react';
import PropTypes from 'prop-types';

function ProductCategory({ category }) {
  return (
    <div className="category">
      <h3 id="category">
        {' '}
        {category}
        {' '}
      </h3>
    </div>
  );
}

ProductCategory.propTypes = {
  category: PropTypes.string,
};

ProductCategory.defaultProps = {
  category: '',
};

export default ProductCategory;
