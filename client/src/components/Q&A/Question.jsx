import React from 'react';
import propTypes from 'prop-types';
import AnswerList from './AnswersList';
import ModalQA from './ModalQA';
import SubmitYourAnswerForm from './SubmitYourAnswerForm';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
    const { questionBody, questId, helpful } = this.props;
    const { show, showModal, hideModal } = this.state;
    return (
      <div>
        <div className="question-ctr">
          <h3>
            Q:
            {' '}
            {questionBody}
          </h3>
          <div className="helpful-addAnswer-ctr">
            <span>Helpful</span>
            <span className="counter">
              {' '}
              <button className="helpful-btn" type="submit">Yes</button>
              {' '}
              {`(`}
              {helpful}
              {')'}
            </span>
            <div className="qa-modal">
              <ModalQA show={show} handleClose={this.hideModal}>
                <SubmitYourAnswerForm handleClose={this.hideModal} />
              </ModalQA>
              <button className="addAnswer-btn" type="submit" onClick={this.showModal}>Add Answer</button>
            </div>
          </div>
          <AnswerList questId={questId} />
        </div>
      </div>
    );
  }
}

export default Question;

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
  questId: propTypes.number.isRequired,
  // showModal: propTypes.func.isRequired,
};
