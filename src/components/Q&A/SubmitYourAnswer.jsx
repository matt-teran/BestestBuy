import React from 'react';

class SubmitYourAnswer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      yourAnswer: '',
      yourName: '',
      yourEmail: '',
      validAnswer: true,
      validName: true,
      validEmail: true,

    },
  }

  onChangeAnswer(event) {
    this.setState({
      yourAnswer: event.target.value,
    })
  }

  onChangeName(event) {
    this.setState({
      yourNickname: event.target.value,
    })
  }

  onChangeEmail(event) {
    this.setState({
      yourEmail: event.target.value,
    })
  }

  validateForm() {
    const yourName = this.state.yourName;
    const yourAnswer = this.state.yourAnswer;
    const yourEmail = this.state.yourEmail;

    let validForm = true;

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
    if (name && body && email) {
      return validForm;
    }
  }

  return(
    <div className = 'answer-form' >
      <form>
        <h1 className='answer-form-title'>Ask Your Question</h1>
        <label>
          <p
        </label>
      </form>
    </div>
  )

}