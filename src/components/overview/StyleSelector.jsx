import React from 'react';
import PropTypes from 'prop-types';
import StyleThumbnail from './Style selector/StyleThumbnail';
import StyleTitle from './Style selector/StyleTitle';

function StyleSelector({ styles }) {
  return (
    <div>
      {/* {styles.map((style) => (
        <div>
          <StyleThumbnail thumbnail={style.photos} />
          <StyleTitle name={style.name} />
        </div>
      ))} */}
    </div>
  );
}

export default StyleSelector;
