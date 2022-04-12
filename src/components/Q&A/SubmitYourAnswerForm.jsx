import React from 'react';

class SubmitYourAnswerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userEmail: '',
      userAnswer: '',
      submitAnswer: false,
    };
  }

  type(event) {
    if (event.target.placeholder === 'Example: jackson11!') {
      this.setState({
        userName: event.target.value,
      });
    } else if (event.target.placeholder === 'Why did you like the product or not?') {
      this.setState({
        userEmail: event.target.value
      });
    }
  }

  render() {
    return (
      <div className="answer-form">
        <form>
          <h1 className="answer-form-title">Ask Your Question</h1>
          <div>
          </div>
        </form>
      </div>
    );
  }
}
export default SubmitYourAnswerForm
/*
import React from 'react';

class SubmitYourAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yourAnswer: '',
      yourName: '',
      yourEmail: '',
      validAnswer: true,
      validName: true,
      validEmail: true,
    };
  }

  onChangeAnswer(event) {
    this.setState({
      yourAnswer: event.target.value,
    });
  }

  onChangeName(event) {
    this.setState({
      yourName: event.target.value,
    })
  }

  onChangeEmail(event) {
    this.setState({
      yourEmail: event.target.value,
    });
  }

  validateForm() {
    const { yourName, yourAnswer, yourEmail } = this.state;

    let validForm;

    if (!yourName) {
      validForm = false;
      this.setState({
        validName: false
      });
    }
    if (!yourAnswer) {
      validForm = false;
      this.setState({
        validAnswer: false
      });
    }
    if (!yourEmail) {
      validForm = false;
      this.setState({
        validEmail: false
      });
    }
    if (!yourEmail.includes('@') || !yourEmail.includes('.com')) {
      validForm = false;
      this.setState({
        validEmail: false
      });
    }
    if (yourName && yourAnswer && yourEmail) {
      return validForm;
    }
  }

  render() {
    return (
      <div className="answer-form">
        <form>
          <h1 className="answer-form-title">Ask Your Question</h1>
          <div>
          </div>
        </form>
      </div>
    );
  }
}
*/
