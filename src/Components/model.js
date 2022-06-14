import React from 'react';
import { useGlobalContext } from '../Store/context'; //costom Hooks
const Model = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="main"></div>
      </div>
    </div>
  );
};
export default Model;
