/* eslint-disable */
import React, { useState } from 'react';
import moment from 'moment';
import Rating from '../ui/Rating/Rating';
import Backdrop from './Modal/Backdrop';
import Modal from './Modal/Modal';
import request from './requests';

function Tile({ review }) {
  const datePosted = review.date.slice(0, 10);
  const formatedDatePosted = moment(datePosted).format('MMMM Do YYYY');
  const [showModal, setModal] = useState(false);
  const [reviewHelpfulness, setReviewHelpfulness] = useState(review.helpfulness);
  const [disable, setDisable] = useState(false);
  const [hideTile, setHideTile] = useState('visible');
  const [reportText, setReportText] = useState('Report');

  const altImg = 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';
  const [modalImgUrl, setModalImgUrl] = useState(altImg);

  function handleModalView(imgUrl) {
    setModalImgUrl(imgUrl);
    setModal(true);
  }

  return review ? (
    <section className={"review-Tile"} style={{display: hideTile}} >
      <div>
        <Rating rating={review.rating} size="20px" />
        <p className="reviewer">{`${review.reviewer_name}, ${formatedDatePosted}`}</p>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <div className="review-Tile-Images">
        {review.photos.map((imgObj, index) => {

          return (
            <span className='thumbnail-image-container' key={imgObj.url}>
              <img onClick={() => { handleModalView(imgObj.url) }} className="review-Image" key={`imageThumbnail ${imgObj.id}`} src={imgObj.url} alt={altImg} />
            </span>)
        })}
      </div>
      <Modal showModal={showModal}>
        <div className="modal-body">
          <img className="review-image-full" key={`imageFull ${modalImgUrl}`} src={modalImgUrl} alt={altImg} />
        </div>
      </Modal>
      <Backdrop showModal={showModal} clickHandler={() => setModal(false)} />
      <div className="action-container">
        <button type="button" disabled={disable} onClick={() => {
          setReviewHelpfulness(reviewHelpfulness + 1);
          setDisable(true);
          request.markHelpful(review.review_id);
        }}>
          Helpful(
          {reviewHelpfulness}
          )
        </button>
        <button type="button" onClick={() => {
          setReportText('Thanks for reporting!');
          setTimeout(()=>{
            setHideTile('none');
          }, 1000)
        }}>{reportText}</button>
        {/* <button type="button">Comment</button> */}
      </div>
    </section>
  ) : (<></>);
}

export default Tile;
