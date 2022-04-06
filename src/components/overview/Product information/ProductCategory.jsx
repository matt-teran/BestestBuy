import React from 'react';
import PropTypes from 'prop-types';

function ProductCategory({ category }) {
  return (
    <div className="category">
      <h4 id="category">
        {' '}
        {category}
        {' '}
      </h4>
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
