import React from 'react';
import './ModalQA.scss';

function ModalQA({ handleClose, show, children }) {
  if (show === false) {
    return null;
  }
  return (
    <div className="modal-qa">
      <section className="modal-main-qa">
        {children}
        <button type="button" onClick={handleClose} />
      </section>
    </div>
  );
}

export default ModalQA;

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
