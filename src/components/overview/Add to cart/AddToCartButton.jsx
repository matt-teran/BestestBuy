import React from 'react';
import PropTypes from 'prop-types';
import '../ProductOverview.scss';

function AddtoCartButton() {
  return (
    <div>
      <button className="add_to_cart_button" type="submit">Add to bag</button>
    </div>
  );
}

AddtoCartButton.propTypes = {

};

AddtoCartButton.defaultProps = {

};

export default AddtoCartButton;
