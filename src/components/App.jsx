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
  useEffect(() => {
    setProductId(paramId);
  }, [paramId]);
  return (
    <div className="app" key={productId}>
      <div><ProductOverview id={productId} /></div>
      <RelatedProducts id={productId} />
      <div><QuestionsList id={productId} /></div>
      <div id="ratings-and-reviews"><RatingsAndReviews id={productId} /></div>
    </div>
  );
}

export default App;
