import React from 'react';

function Answer(props) {
  return (
    <div>
      <div className="answer-ctr">
        <h4>
          A:
          {' '}
          {props.answerBody}
        </h4>
      </div>
    </div>
  );
}

export default Answer;
