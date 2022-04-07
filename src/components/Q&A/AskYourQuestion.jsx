import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

class AskYourQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      askName: '',
      askEmail: '',
      askQuestion: '',
      // send: false,
    };
    this.postQuestion.bind(this);
  }
  /*
  const { closeModal } = this.state;
  selectModal(event) {
  event.stopPropagation();
  closeModal();
*/

  postQuestion() {
    const { productId } = this.props;
    const { askQuestion, askName, askEmail } = this.state;
    this.setState({
      // send: true,
    });
    axios.post('qa/questions', {
      body: askQuestion,
      name: askName,
      email: askEmail,
      productId,
    })
      .then((response) => {
        console.log('Submission Successful!', response.data);
        // this.props.closeModal();
      });
  }

  // type(event) {

  // }
}

AskYourQuestion.propTypes = {
  productId: propTypes.string.isRequired,
};
