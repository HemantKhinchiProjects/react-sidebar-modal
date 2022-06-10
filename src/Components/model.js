import React from 'react';
const Model = () => {
  return (
    <div className={`modal-overlay show-modal`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div className="main"></div>
      </div>
    </div>
  );
};
export default Model;
