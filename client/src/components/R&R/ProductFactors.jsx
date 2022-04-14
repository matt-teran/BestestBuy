import React from 'react';

function ProductFactors({ productStats }) {

  let productCharacteristicsKeys = Object.keys(productStats.characteristics);

  return productCharacteristicsKeys.length ? (
    <>
      <h3> Product Factors!!</h3>
      {
        productCharacteristicsKeys.map((key, index) => (
          <div className="product-factors" key={'productFact' + index}>
            <div>{key}</div>
            <div className="bar-product-factor">
              <div className="bar-product-factor-left" />
              <div className="bar-product-factor-middle" />
              <div className="bar-product-factor-right" />
              <div id="arrow-down" style={{left: (productStats.characteristics[key].value/5)*95 + '%' }}/>
            </div>
            <div className="product-factor-description">
              <div>Too Small</div>
              <div>Perfect</div>
              <div>Too Large</div>
            </div>
          </div>
        ))
      }
    </>
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
