import React from 'react';
import PropTypes from 'prop-types';
import StyleThumbnail from './Style selector/StyleThumbnail';
import StyleTitle from './Style selector/StyleTitle';

function StyleSelector({ styles, selectStyle, title }) {
  return (
    <div>
      <div>
        <StyleTitle title={title} />
      </div>
      <div>
        {styles.map((style) => (
          <div key={style.style_id}>
            <StyleThumbnail
              style={style}
              selectStyle={(event) => selectStyle(event)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({})),
  selectStyle: PropTypes.func,
  title: PropTypes.string,
};

StyleSelector.defaultProps = {
  styles: [],
  selectStyle: '',
  title: '',
};
export default StyleSelector;
