import React from 'react';
import './modalQA.scss';

function ModalQA({ handleClose, show, children }) {
  if (show === false) {
    return null;
  }
  return (
    <>
      <div className="modal-qa">
        .
      </div>
      <div>
        <section className="modal-main-qa">
          {children}
          <button type="button" onClick={handleClose}>
          </button>
        </section>
      </div>
    </>
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
