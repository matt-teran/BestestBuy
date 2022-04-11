import React from 'react';
import propTypes from 'prop-types';

function Answer({ answerBody }) {
  return (
    <div>
      <div className="answer-ctr">
        <h4>
          A:
          {' '}
          {answerBody}
        </h4>
      </div>
    </div>
  );
}

Answer.propTypes = {
  answerBody: propTypes.string.isRequired,
};

export default Answer;
