import React from 'react';

function ProductFactors({ productStats }) {

  console.log(productStats);
  let productCharacteristicsLength = Object.keys(productStats.characteristics).length;
  let productCharacteristics = productStats.characteristics;

  return productCharacteristicsLength ? (
    <div className="product-factors">
      <h3> Product Factors</h3>
      <div> Comfort</div>
      <div className="bar-product-factor">
        <div className="bar-product-factor-left" />
        <div className="bar-product-factor-middle" />
        <div className="bar-product-factor-right" />
        <div id="arrow-down" />
      </div>
      <div className="product-factor-description">
        <div>Too Small</div>
        <div>Perfect</div>
        <div>Too Large</div>
      </div>
    </div>
  ) : (
  <div className="product-factors">
    <h3> Product Factors</h3>
    <h4>(No Reviews Yet)</h4>
    <div> Comfort</div>
    <div className="bar-product-factor">
      <div className="bar-product-factor-left" />
      <div className="bar-product-factor-middle" />
      <div className="bar-product-factor-right" />
    </div>
    <div className="product-factor-description">
      <div>Too Small</div>
      <div>Perfect</div>
      <div>Too Large</div>
    </div>
  </div>
  );
}

export default ProductFactors;

//Comfort, Quality, Size, Width