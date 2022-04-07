import React from 'react';
import PropTypes from 'prop-types';

import './Comparison.scss';
import AttributeCompare from './AttributeCompare';

function Comparison({ currentProduct, comparedProduct }) {
  const currentFeatures = {};
  const comparedFeatures = {};

  currentProduct.forEach((feat) => {
    currentFeatures[feat.feature] = feat.value;
  });

  comparedProduct.forEach((feat) => {
    comparedFeatures[feat.feature] = feat.value;
  });

  const features = [...new Set([...currentProduct, ...comparedProduct]
    .map((feature) => feature.feature))];
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
        <tbody className="comparison-table-body">
          {features.map((feature) => (
            <AttributeCompare
              key={feature}
              feature={feature}
              current={currentFeatures[feature] !== (undefined || null)}
              compared={comparedFeatures[feature] !== (undefined || null)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Comparison.propTypes = {
  currentProduct: PropTypes.arrayOf(PropTypes.shape({

  })),
  comparedProduct: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Comparison;
