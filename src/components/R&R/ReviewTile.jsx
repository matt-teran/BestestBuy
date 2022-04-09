/* eslint-disable */
import React, { useState } from 'react';
import moment from 'moment';
import Rating from '../ui/Rating/Rating';
import Backdrop from '../ui/Modal/Backdrop';
import Modal from '../ui/Modal/Modal';

function Tile({ review }) {
  const datePosted = review.date.slice(0, 10);
  const formatedDatePosted = moment(datePosted).format('MMMM Do YYYY');
  const [showModal, setModal] = useState(false);
  const altImg = 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';
  const [modalImgUrl, setModalImgUrl] = useState(altImg);

  function handleModalView(imgUrl) {
    setModalImgUrl(imgUrl);
    setModal(true);
  }

  return review ? (
    <section className="review-Tile">
      <div>
        <Rating rating={review.rating} size="20px" />
        <p className="reviewer">{`${review.reviewer_name}, ${formatedDatePosted}`}</p>
      </div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <div className="review-Tile-Images">
        {review.photos.map((imgObj, index) => <img onClick={() => { handleModalView(imgObj.url) }} className="review-Image" key={`imageThumbnail ${imgObj.id}`} src={imgObj.url} alt={altImg} />)}
      </div>
      <div className="Modal-container">
        <Modal showModal={showModal}>
          <img className="review-image-full" key={`imageFull ${modalImgUrl}`} src={modalImgUrl} alt={altImg} />
        </Modal>
        <Backdrop showModal={showModal} clickHandler={() => setModal(false)} />
      </div>

      <div className="helpfulAndReport">
        <button type="button">
          Helpful(
          {review.helpfulness}
          )
        </button>
        <button type="button">Report</button>
        <button type="button">Comment</button>
      </div>
    </section>
  ) : (<></>);
}

// {avgRating !== -1 ? <Rating rating={avgRating} size="20px" /> : null}
export default Tile;
