/*
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';
const id = 66642;
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
      body: '',
      helpfulness: 0,
      answer: {},
      numberOfQuestions: 4,
      numberOfAnswers: 2,
      allQuestionsLoaded: false,
      allAnswersLoaded: false

    };
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

*/
