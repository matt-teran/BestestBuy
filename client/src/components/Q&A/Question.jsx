import React from 'react';
import propTypes from 'prop-types';
import AnswerList from './AnswersList';

function Question({ questionBody, questId }) {
  return (
    <div>
      <div className="question-ctr">
        <h3>
          Q:
          {' '}
          {questionBody}
        </h3>
        <div className="helpful-addAnswer-ctr">
          <p>Helpful?</p>
          <button className="helpful-btn" type="submit">Yes</button>
          {/* <div className="divider"> | </div> */}
          <button className="addAnswer-btn" type="submit">Report</button>
        </div>
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
