import React from 'react';

function Question(props) {
  return (
    <div>
      <div className="question-ctr">
        <h4>Q: {props.questionBody}</h4>
      </div>
    </div>
  );
}

export default Question;
