import React from 'react';
import axios from 'axios';
import { url, headers } from '../../config';
import Search from './Search.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      questions: {
        results: [],
      },
    };
    // getQuestions().then((data) => {
    //   console.log(data);
    // });
  }

  componentDidMount() {
    const { id } = this.props;
    this.getQuestion(id);
  }

  getQuestion(id) {
    axios(`${url}/qa/questions?product_id=${id}&count=25`, headers)
      .then((response) => {
        console.log(response);
        this.setState({
          questions: response.data,
        });
      })
      .catch(() => {
        console.log('getQuestion error');
      });
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="main-ctr">
        <div className="title-ctr">
          <h4>Questions & Answers</h4>
        </div>
        <Search />
        {questions.results.map(question => {
          return question.question_body;
        })}
        <Answer />
        <div className="btn-ctr">
          <button className="maq-btn" type="button">MORE ANSWERED QUESTIONS</button>
          <button className="aaq-btn" type="button">ADD A QUESTION +</button>
        </div>
      </div>
    );
  }
}

export default QuestionsList;

/*
// quest: qa/questions
// ans: qa/questions/:question_id/

const getQuestions = function () {
  let body = {
    product_id: '5',
    page: 1,
    count: 5,
  };
  return axios.get(url + 'qa/questions/', {
    headers: {
      Authorization: API_KEY,
    },
  });
};

*/
