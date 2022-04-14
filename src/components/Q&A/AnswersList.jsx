import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import moment from 'moment';
import { url, headers } from '../../config';
import Answer from './Answer';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 2,
      expanded: false,
      answers: {
        results: [],
      },
    };
    this.removeLimit = this.removeLimit.bind(this);
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

  // removeLimit() {
  //   this.setState({
  //     limit: 100,
  //   });
  // }

  removeLimit() {
    const { limit, answers, expanded } = this.state;
    limit === 2 ? (this.setState({
      limit: answers.results.length,
      expanded: true,
    })) : (this.setState({
      limit: 2,
      expanded: false,
    }));
  }

  render() {
    const { answers } = this.state;
    const { limit } = this.state;
    const { expanded } = this.setState;
    return (
      <div className="answer-list-ctr">
        {answers.results.map((answer, i) => {
          if (i < limit) {
            return <Answer key={answer.answer_id} answerBody={answer.body} answerer={answer.answerer_name} date={moment(answer.date).fromNow()} helpful={answer.helpfulness} />;
          }
        })}
        {answers.results.length > 2 ? (
          <div>
            {(!expanded) ? (
              <button type="button" className="more-answers-btn" onClick={this.removeLimit}>Load More Answers</button>
            ) : (
              <button type="button" className="more-answers-btn" onClick={this.removeLimit}>Collapse Answers</button>
            )}
          </div>
        ) : (null)}
      </div>
    );
  }
}

AnswerList.propTypes = {
  questId: propTypes.number.isRequired,
};

export default AnswerList;
