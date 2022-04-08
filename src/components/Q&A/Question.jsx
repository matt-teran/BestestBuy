import React from 'react';
import propTypes from 'prop-types';
import AnswerList from './AnswersList';

function Question({ questionBody, questId }) {
  return (
    <div>
      <div className="question-ctr">
        <h4>
          Q:
          {' '}
          {questionBody}
        </h4>
      </div>
      <div>
        <AnswerList questId={questId} />
      </div>
    </div>
  );
}

export default Question;

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
};
