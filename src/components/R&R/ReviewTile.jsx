import request from './requests';
import React from 'react';

function Tiles({ productId, page = 1, sort = 'relevant' }) {
  request.getReviews(productId, page, sort);
  // .then((data)={
  //   console.log(data);
  // })

  return (<div> </div>);
}

export default Tiles;
