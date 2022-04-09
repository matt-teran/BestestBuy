import React from 'react';
import PropTypes from 'prop-types';
import StyleThumbnail from './Style selector/StyleThumbnail';
import StyleTitle from './Style selector/StyleTitle';

function StyleSelector({
  styles, selectStyle, title, styleId,
}) {
  return (
    <div>
      <div className="style-title">
        <StyleTitle title={title} />
      </div>
      <div className="style-selector">
        {styles.map((style) => (
          <div key={style.style_id} className="style-thumbnail-block">
            <StyleThumbnail
              style={style}
              selectStyle={(event) => selectStyle(event)}
              styleId={styleId}
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
  styleId: PropTypes.number,
};

StyleSelector.defaultProps = {
  styles: [],
  selectStyle: '',
  title: '',
  styleId: 0,
};
export default StyleSelector;
