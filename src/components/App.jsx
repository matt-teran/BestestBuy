import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './app.scss';

import Header from './header/Header';
import ProductOverview from './overview/ProductOverview';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QuestionsList from './Q&A/QuestionsList';
import RatingsAndReviews from './R&R/RatingsAndReviews';
import PostClickData from './hoc/PostClickData';

function App() {
  const { paramId } = useParams();
  const [productId, setProductId] = useState(paramId);
  const [showRelated, setShowRelated] = useState(false);
  useEffect(() => {
    setProductId(paramId);
    setShowRelated(false);
  }, [paramId]);
  return (
    <PostClickData>
      <div className="app" id="app" key={productId}>
        <Header />
        <div id="product-overview"><ProductOverview id={productId} /></div>
        {showRelated ? <div id="related-products"><RelatedProducts id={productId} /></div> : <div id="related-products"><button className="show-related" onClick={() => setShowRelated(true)} type="button">Show Related Products</button></div>}
        <div id="questions-and-answers"><QuestionsList id={productId} /></div>
        <div id="ratings-and-reviews"><RatingsAndReviews id={productId} /></div>
      </div>
    </PostClickData>
  );
}

export default App;
