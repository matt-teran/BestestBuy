import React from 'react';

import './Comparison.scss';

function Comparison({ currentProduct, comparedProduct }) {
  console.log('currentProduct: ', currentProduct);
  console.log('compared product: ', comparedProduct);
  return (
    <div className="comparison">
      <h1 className="comparison-title">Comparison</h1>
    </div>
  );
}

export default Comparison;
