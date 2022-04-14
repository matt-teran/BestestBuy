import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { url, headers } from '../../config';
import Search from './Search';
import Question from './Question';
import AnswerList from './Answer';
import Modal from './Modal';
import AskYourQuestionForm from './AskYourQuestionForm';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 4,
      searchInput: '',
      show: false,
      searchQuestions: {
        results: [],
      },
      questions: {
        results: [],
      },
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.search = this.search.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getQuestion(id);
  }

  getQuestion(id) {
    axios(`${url}/qa/questions?product_id=${id}&count=25`, headers)
      .then((response) => {
        // console.log(response);
        this.setState({
          questions: response.data,
          searchQuestions: response.data,
        });
      })
      .catch(() => {
        console.log('getQuestion error');
      });
  }

  changeHandler(event) {
    // console.log(event);
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

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    const { searchQuestions, limit, show } = this.state;
    return (
      <div className="main-ctr">
        <div className="title-ctr">
          <h4>Questions & Answers</h4>
        </div>
        <Search changeHandler={this.changeHandler} search={this.search} />
        {searchQuestions.results.map((question, i) => {
          if (i < limit) {
            return <Question key={question.question_id} questionBody={question.question_body} questId={question.question_id} helpful={question.question_helpfulness} />
          }
        })}
        <AnswerList />
        <div className="btn-ctr">
          <button className="maq-btn" type="button">MORE ANSWERED QUESTIONS</button>
          <div className="qa-modal">
            <Modal show={show} handleClose={this.hideModal}>
              <AskYourQuestionForm handleClose={this.hideModal} />
            </Modal>
          </div>
          <button className="aaq-btn" type="submit" onClick={this.showModal}>ADD A QUESTION +</button>
        </div>
      </div>
    );
  }
}

QuestionsList.propTypes = {
  id: propTypes.string.isRequired,
};

export default QuestionsList;
