import React from 'react';
import axios from 'axios';
import './app.scss';
import Header from './header/Header';
import ProductOverview from './overview/ProductOverview';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QuestionsList from './Q&A/QuestionsList';
import RatingsAndReviews from './R&R/RatingsAndReviews';
import { headers, url } from '../config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: null,
    };
  }

  componentDidMount() {
    this.getRandomProductId();
  }

  getRandomProductId() {
    const pageNumber = Math.floor(Math.random() * 100);
    axios.get(`${url}/products?page=${pageNumber}`, headers)
      .then(({ data }) => {
        this.setState({ productId: data[Math.floor(Math.random() * data.length)].id.toString() });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const { productId } = this.state;
    return (
      <>
        <Header />
        {!productId ? <div>Loading...</div> : (
          <div className="app">
            <div><ProductOverview id={productId} /></div>
            <RelatedProducts id={productId} />
            <div><QuestionsList id={productId} /></div>
            <div><RatingsAndReviews id={productId} /></div>
          </div>
        )}
      </>
    );
  }
}

export default App;
