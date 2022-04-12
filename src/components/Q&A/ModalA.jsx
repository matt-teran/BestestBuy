import React from 'react';
import './modal.scss';

function ModalA({ handleClose, show, children }) {
  if (show === false) {
    return null;
  }
  return (
    <div className="modal">
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
        </button>
      </section>
    </div>
  );
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