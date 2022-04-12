import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';

import { headers, url } from '../../config';

function PostClickData({ children }) {
  const docRef = useRef();
  const clickHandler = (event) => {
    const element = event.target.className === ''
      ? event.target.nodeName.toLowerCase()
      : `${event.target.nodeName.toLowerCase()}.${event.target.className}`;

    let widget = 'App';
    if (docRef.current.querySelector('#header').contains(event.target)) {
      widget = 'Header';
    } else if (docRef.current.querySelector('#product-overview').contains(event.target)) {
      widget = 'Product Overview';
    } else if (docRef.current.querySelector('#related-products').contains(event.target)) {
      widget = 'Related Products and Outfits';
    } else if (docRef.current.querySelector('#questions-and-answers').contains(event.target)) {
      widget = 'Questions and Answers';
    } else if (docRef.current.querySelector('#ratings-and-reviews').contains(event.target)) {
      widget = 'Ratings and Reviews';
    }

    // console.log('Element Clicked: ', htmlSelector);
    // console.log('Time @ click: ', moment()._d.toString());
    // console.log('Widget clicked: ', widget);

    axios.post(`${url}/interactions`, {
      element,
      widget,
      time: moment()._d,
    }, headers)
      .then((res) => { console.log(res); })
      .catch((err) => { console.log(err); });
  };

  return (
    <div ref={docRef}>
      {React.Children.map(children, (child) => React.cloneElement(child, {
        onClick: clickHandler,
      }))}
    </div>
  );
}

PostClickData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostClickData;
