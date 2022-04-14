import React from 'react';
import propTypes from 'prop-types';

class SubmitYourAnswerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userEmail: '',
      userAnswer: '',
      // submitAnswer: false,
    };

    this.type = this.type.bind(this);
  }

  type(event) {
    if (event.target.placeholder === 'Example: jack543!') {
      this.setState({
        userName: event.target.value,
      });
    } else if (event.target.placeholder === 'Example: jack@email.com') {
      this.setState({
        userEmail: event.target.value,
      });
    } else {
      this.setState({
        userAnswer: event.target.value,
      });
    }
  }
  /*
  postAnswer(id) {
    const { userName, userEmail, userAnswer } = this.state;
    const { questId, hideModal } = this.props;
    this.setState({
      submitAnswer: true,
    });
    axios.post('/qa/questions', {
      name: userName,
      email: userEmail,
      answer: userAnswer,
      question_id: questId,
    })
      .then((response) => {
        console.log('Answer Posted Successfully', response.data);
        this.props.hideModal();
      });
  }

  postQuestion(id) {
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
  */

  render() {
    const { userName, userEmail, userAnswer } = this.state;
    const { handleClose } = this.props;
    return (
      <div className="answer-form">
        <div>
          <h1 className="answer-form-title">Submit Your Answer</h1>
          <form onSubmit={handleClose}>
            <label htmlFor="username">
              What is your nickname?:
              <br />
              <input
                id="username"
                type="text"
                placeholder="Example: jack543!"
                value={userName}
                maxLength="60"
                // required
                onChange={(event) => { event.preventDefault(); this.type(event); }}
              />
              <p>For privacy reasons, do not use your full name</p>
            </label>
            <label htmlFor="email">
              Your email?:
              <br />
              <input
                id="email"
                type="text"
                placeholder="Example: jack@email.com"
                value={userEmail}
                maxLength="60"
                // required
                onChange={(event) => { event.preventDefault(); this.type(event); }}
              />
              <p>For authentication reasons, you will not be emailed</p>
            </label>
            <label htmlFor="answer">
              Your Answer?:
              <br />
              <input
                className="answer-box"
                id="answer"
                type="text"
                // placeholder="Example: jack543!"
                value={userAnswer}
                maxLength="1000"
                minLength="1"
                rows={5}
                columns={10}
                // required
                onChange={(event) => { event.preventDefault(); this.type(event); }}
              />
            </label>
            <input type="submit" value="Submit" onClick={handleClose} />
          </form>
        </div>
      </div>
    );
  }
}
export default SubmitYourAnswerForm;

SubmitYourAnswerForm.propTypes = {
  handleClose: propTypes.func.isRequired,
};
