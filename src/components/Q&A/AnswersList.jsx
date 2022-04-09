import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { url, headers } from '../../config';
import Answer from './Answer';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //answersToDisplay: 2
      answers: {
        results: [],
      },
    };
  }

  componentDidMount() {
    const { questId } = this.props;
    this.getAnswer(questId);
  }

  getAnswer(questId) {
    axios(`${url}/qa/questions/${questId}/answers?count=25`, headers)
      .then((response) => {
        console.log(response);
        this.setState({
          answers: response.data,
        });
      })
      .catch(() => {
        console.log('getAnswer error');
      });
  }

  render() {
    const { answers } = this.state;
    return (
      <div className="answer-list-ctr">
        {answers.results.map((answer) => {
          if (answers.results.length > 2) {
            return answers.results.length === 2;
          }
          return <Answer key={answer.answer_id} answerBody={answer.body} />;
        })}
        <button type='button' className='more-answers-btn' onClick={this.loadMoreQuestions}>Load More Answers</button>
      </div>
    );
  }
}

AnswerList.propTypes = {
  questId: propTypes.number.isRequired,
};

export default AnswerList;
