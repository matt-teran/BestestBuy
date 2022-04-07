import React from 'react';

function Question() {
  return (
    <div>
      <div className="question-ctr">
        <h4>Q: Is this a question?</h4>
      </div>
    </div>
  );
}

/*
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    render() {
      return (
        <div>
          <h3>Questions & Answers</h3>
          <div className='question'>
            <h4>Q: Is this a question?</h4>
          </div>
          <div className='answer'>
            <h4>A: This is an answer!</h4>
          </div>
        </div>)
    }
  }
*/
export default Question;
