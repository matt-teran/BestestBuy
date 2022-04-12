import React from 'react';
import './modal.scss';

class ModalA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userEmail: '',
      userAnswer: '',
    };
  }

  render() {
    const { handleClose, show, children } = this.props;
    const showHideClassName = show ? 'model display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  }
}
export default ModalA;

/*
function ModalA({ handleClose, show, children }) {
  const showHideClassName = show ? 'model display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
*/