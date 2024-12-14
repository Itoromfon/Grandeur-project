// components/Modal.js
import React from 'react';
import styles from './Modal.module.css'

const Modal = ({ content, closeModal }) => {
  return (
    <div className={styles.modaloverlay} onClick={closeModal}>
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closebutton} onClick={closeModal}>
          &times;
        </button>
        <p className={styles.textcontent}>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
