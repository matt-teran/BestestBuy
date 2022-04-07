import React from 'react';

import './Comparison.scss';

function Comparison({ currentProduct, comparedProduct }) {
  console.log('currentProduct: ', currentProduct);
  console.log('compared product: ', comparedProduct);
  return (
    <div className="comparison">
      <h1 className="comparison-title">Comparison</h1>
      <table className="comparison-table">
        <thead>
          <tr className="comparison-table-row">
            <th>Current Product</th>
            <th>Characteristic</th>
            <th>Compared Product</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Comparison;
