import React from 'react';
import propTypes from 'prop-types';
import AnswerList from './AnswersList';
import ModalA from './ModalA';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.showModal = this.showModal.bind.this;
    this.hideModal = this.hideModal.bind.this;
  }

  showModal() {
    this.setState({
      showModel: true,
    });
  }

  hideModal() {
    this.setState({
      showModel: false,
    });
  }

  render() {
    const { questionBody, questId } = this.props;
    const { showModal, hideModal } = this.state;
    return (
      <div>
        <div className="question-ctr">
          <h3>
            Q:
            {' '}
            {questionBody}
          </h3>
          <div className="helpful-addAnswer-ctr">
            <p>Helpful?</p>
            <button className="helpful-btn" type="submit">Yes</button>
            {/* <div className="divider"> | </div> */}
            <div className="answer-modal">
              {/* <ModalA show={showModal} handleClose={hideModal} /> */}
            </div>
            <button className="addAnswer-btn" type="submit" onClick={showModal}>Add Answer</button>
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
  showModal: propTypes.func.isRequired,
};


/*
function Question({ questionBody, questId, showModal, hideModal }) {
  return (
    <div>
      <div className="question-ctr">
        <h3>
          Q:
          {' '}
          {questionBody}
        </h3>
        <div className="helpful-addAnswer-ctr">
          <p>Helpful?</p>
          <button className="helpful-btn" type="submit">Yes</button>

          <div className="answer-modal">
            <h1>Submit Your Answer</h1>
            <ModalA show={this.state.showModal} handleClose={this.hideModal} />
          </div>
          <button className="addAnswer-btn" type="submit" onClick={showModal}>Add Answer</button>
        </div>
        <AnswerList questId={questId} />
      </div>
    </div>
  );
}

export default Question;

Question.propTypes = {
  questionBody: propTypes.string.isRequired,
  questId: propTypes.number.isRequired,
  showModal: propTypes.func.isRequired,
};

import React from 'react';
import propTypes from 'prop-types';
import AnswerList from './AnswersList';
import ModalA from './ModalA';
*/
