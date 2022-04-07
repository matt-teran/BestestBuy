import PropTypes from 'prop-types';
import React from 'react';

function AttributeCompare({ current, feature, compared }) {
  return (
    <tr className="comparison-table-row">
      <td>{current ? 'yup' : 'nope'}</td>
      <td>{feature}</td>
      <td>{compared ? 'yup' : 'nope'}</td>
    </tr>
  );
}

AttributeCompare.propTypes = {
  current: PropTypes.bool.isRequired,
  feature: PropTypes.string.isRequired,
  compared: PropTypes.bool.isRequired,
};

export default AttributeCompare;
