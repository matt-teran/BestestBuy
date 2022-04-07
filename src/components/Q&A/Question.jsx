import React from 'react';
import propTypes from 'prop-types';

function Question(props) {
  return (
    <div>
      <div className="question-ctr">
        <h4>
          Q:
          {' '}
          {props.questionBody}
        </h4>
      </div>
    </div>
  );
}

export default Question;

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
};
