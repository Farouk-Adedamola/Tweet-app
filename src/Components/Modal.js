import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ closeModal, modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1500);
  });

  return (
    <>
      <div>
        <p className="modal">{modalContent}</p>
      </div>
    </>
  );
};

export default Modal;
