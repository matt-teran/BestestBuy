import React from 'react';
import propTypes from 'prop-types';

function Answer({ answerBody, answerer, date, helpful }) {
  return (
    <div>
      <div className="answer-ctr">
        <h4>
          A:
          {' '}
          {answerBody}
        </h4>
        <h5>
          by
          {' '}
          {answerer}
          {' - '}
          {date}
          {'  |  '}
          Helpful?
          {' '}
          <button className="helpful-btn" type="submit">Yes</button>
          {'('}
          {helpful}
          {')'}
          {'  |  '}
          <button className="report-btn" type="submit">Report</button>
        </h5>
      </div>
    </div>
  );
}

Answer.propTypes = {
  answerBody: propTypes.string.isRequired,
};

export default Answer;
