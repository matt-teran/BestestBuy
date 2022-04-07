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

export default AttributeCompare;
