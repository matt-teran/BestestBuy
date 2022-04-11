import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './app.scss';

import ProductOverview from './overview/ProductOverview';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QuestionsList from './Q&A/QuestionsList';
import RatingsAndReviews from './R&R/RatingsAndReviews';

function App() {
  const { paramId } = useParams();
  const [productId, setProductId] = useState(paramId);
  const [showRelated, setShowRelated] = useState(false);
  useEffect(() => {
    setProductId(paramId);
    setShowRelated(false);
  }, [paramId]);
  return (
    <div className="app" key={productId}>
      <div><ProductOverview id={productId} /></div>
      {showRelated ? <RelatedProducts id={productId} /> : <button className="show-related" onClick={() => setShowRelated(true)} type="button">Show Related Products</button>}
      <div><QuestionsList id={productId} /></div>
      <div id="ratings-and-reviews"><RatingsAndReviews id={productId} /></div>
    </div>
  );
}

export default App;
