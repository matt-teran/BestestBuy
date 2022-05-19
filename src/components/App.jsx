import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './app.scss';

import Header from './Header/Header';
import ProductOverview from './ProductOverview/ProductOverview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QuestionsList from './QuestionsAndAnswers/QuestionsList';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import PostClickData from './hoc/PostClickData';

function App() {
  const { paramId } = useParams();
  const [productId, setProductId] = useState(paramId);
  const [showRelated, setShowRelated] = useState(false);

  useEffect(() => {
    setProductId(paramId);
    setShowRelated(false);
    // navigate(paramId);
  }, [paramId]);

  return (
    <PostClickData>
      <div className="app" id="app">
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
