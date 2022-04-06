import React from 'react';
import axios from 'axios';
import API_KEY from '../../config';
import Search from './Search.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx'
import { url } from './apiData.js'

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    getQuestions().then((data) => {
      // console.log(data);
    });
  }

  render() {
    return (
      <div className='main-ctr'>
        <div className='title-ctr'>
          <h4>Questions & Answers</h4>
        </div>
        <Search />
        <Question />
        <Answer />
        <div className='btn-ctr'>
          <button className='maq-btn' type='button'>MORE ANSWERED QUESTIONS</button>
          <button className='aaq-btn' type='button'>ADD A QUESTION +</button>
        </div>
      </div>)
  }
}

export default QuestionsList;


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
