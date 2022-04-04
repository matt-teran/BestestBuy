import React from 'react';
import axios from 'axios';
import API_KEY from '../../config';
import Search from './Search.jsx';
//import qData from './Data.json';
import Question from './Question.jsx';
import Answer from './Answer.jsx'

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

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

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    getQuestions().then((data) => {
      console.log(data);
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

/*
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

// quest: qa/questions
// ans: qa/questions/:question_id/

const getQuestions = function () {
  let body = {
    product_id: '5',
    page: 1,
    count: 5,
  };
  return axios.get(url + 'qa/questions?product_id=5', {
    headers: {
      Authorization: API_KEY,
    },
  });
};

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    getQuestions().then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <h4>Questions & Answers</h4>
        <Search placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' data={qData} />
        <Question />
      </div>)
  }
}


/*const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';

module.exports = {
  questions: (req, res) => {
    let urlSplit = req.url.split('=');
    let request = url + `qa/questions?product_id=${Number(urlSplit[1])}&page=1&count=25`;

    axios.get(request, {
      headers: {
        Authorization: API_KEY,
      }
    }).then((data) => {
      res.send(data.data.results).end();
    });
  },
  answers: (req, res) => {
    res.status(200).end();
  },
}


module.exports = {
  questions: (id) => {
    return axios.get(`/qa/questions/:product_id=${id}`);
  },
  answers: () => {
    return axios.get('qa/questions/:questions_id/answers');
  },
  updateHelpful: (id) => {
    return axios.put(`qa/questions/:question_id=${id}`)
      .then(data => {
        return data
        console.log(data);
      })
  }
}
*/