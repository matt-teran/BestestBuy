import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton, TwitterShareButton, PinterestShareButton,
  FacebookIcon, TwitterIcon, PinterestIcon,
} from 'react-share';

function Share({ title }) {
  return (
    <div className="share">
      <div id="facebook_share">
        <FacebookShareButton
          url="dsssdds"
          quote={title}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div id="twitter_share">
        <TwitterShareButton
          url="dsssdds"
          quote={title}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div id="pinterest_share">
        <PinterestShareButton
          url="dsssdds"
          quote={title}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      </div>
    </div>
  );
}

Share.propTypes = {
  title: PropTypes.string,
};

Share.defaultProps = {
  title: '',
};

export default Share;
