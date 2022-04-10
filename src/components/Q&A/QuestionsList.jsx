import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { url, headers } from '../../config';
import Search from './Search';
import Question from './Question';
import AnswerList from './Answer';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isHidden: false
      limit: 4,
      searchInput: '',
      searchQuestions: {
        results: [],
      },
      questions: {
        results: [],
      },
    };
    this.removeLimit = this.removeLimit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.search = this.search.bind(this);
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
          searchQuestions: response.data,
        });
      })
      .catch(() => {
        console.log('getQuestion error');
      });
  }

  removeLimit() {
    return this.setState({
      limit: 100,
    });
  }

  changeHandler(event) {
    console.log(event);
    return this.setState({
      searchInput: event.target.value,
    });
  }

  search() {
    const { questions, searchInput } = this.state;
    const searchedArr = questions.results.filter((question) => {
      return question.question_body.includes(searchInput)
    });
    this.setState({
      searchQuestions: { results: searchedArr },
    });
  }

  render() {
    const { searchQuestions } = this.state;
    return (
      <div className="main-ctr">
        <div className="title-ctr">
          <h4>Questions & Answers</h4>
        </div>
        <Search changeHandler={this.changeHandler} search={this.search} />
        {searchQuestions.results.map((question, i) => {
          const { limit } = this.state;
          if (i < limit) {
            return <Question key={question.question_id} questionBody={question.question_body} questId={question.question_id} />
          }
        })}
        <AnswerList />
        <div className="btn-ctr">
          <button className="maq-btn" type="button" onClick={this.removeLimit}>MORE ANSWERED QUESTIONS</button>
          <button className="aaq-btn" type="button">ADD A QUESTION +</button>
        </div>
      </div>
    );
  }
}

QuestionsList.propTypes = {
  id: propTypes.string.isRequired,
};

export default QuestionsList;
