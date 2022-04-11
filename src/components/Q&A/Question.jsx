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
      <div className="answer-ctr">
        <AnswerList questId={questId} />
      </div>
    </div>
  );
}

export default Question;

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
  questId: propTypes.number.isRequired,
};
