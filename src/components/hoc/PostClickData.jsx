import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';

// import { headers, url } from '../../config';

/**
 * This component must wrap the entire App component.
 * @param {node} children
 * Children is defined as whatever is wrapped by this component
 * example: <PostClickData><App /></PostClickData>
 * @returns React Component
 */

function PostClickData({ children }) {
  /*
  The useRef hook is used to grab an HTML element from the DOM.
  On line 72, docRef is set to be equal to the HTML object div that wraps the children.
  Because docRef is an HTML object, I get access to querySelector().
  (For some reason, document.querySelector doesn't work, hence why I use the useRef hook).
  */
  const docRef = useRef();
  /*
  On each click, 3 data points are gathered:
    -- HTML Selector (String)
    -- Time of click (String) -- On line 60, moment is used to get the time of click.
    -- Widget Clicked (String)
  */
  const clickHandler = (event) => {
    /*
    HTML Selector is captured here. It concatenates the HTML element with
      its classname (if it has one).
      (ex: 'div.product-overview', 'p', 'div.comparison')
    */
    const element = event.target.className === ''
      ? event.target.nodeName.toLowerCase()
      : `${event.target.nodeName.toLowerCase()}.${event.target.className}`;
    /*
    Widget clicked is captured here. By using docRef & querySelector,
      we can select a widget component w/ querySelector
      and check if it contains the HTML element that was clicked.
      If the click didn't happen within any widget, the default is 'App'.
    */
    let widget = 'App';
    if (docRef.current.querySelector('#header').contains(event.target)) {
      widget = 'Header';
    } else if (
      docRef.current.querySelector('#product-overview').contains(event.target)
    ) {
      widget = 'Product Overview';
    } else if (
      docRef.current.querySelector('#related-products').contains(event.target)
    ) {
      widget = 'Related Products and Outfits';
    } else if (
      docRef.current
        .querySelector('#questions-and-answers')
        .contains(event.target)
    ) {
      widget = 'Questions and Answers';
    } else if (
      docRef.current
        .querySelector('#ratings-and-reviews')
        .contains(event.target)
    ) {
      widget = 'Ratings and Reviews';
    }
    // data points are posted to api
    axios
      .post(
        `${process.env.URL}/interactions`,
        {
          element,
          widget,
          time: moment()._d,
        },
        {
          headers: {
            Authorization: process.env.KEY,
          },
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
  React.Children.map allows us to render an array of children elements.
  Using this in conjunction with React.cloneElement allows us to set a new prop on each and every
  component within props.children.
  */
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
