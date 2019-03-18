import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
    <Modal
      className="confirmation-modal"
      isOpen={props.isOpen}
      onRequestClose={props.handleNoConfirmation}
      contentLabel="Confirmation"
    >
        <h3 className="confirmation-modal__title">Are you sure?</h3>
        <div className="confirmation-modal__body">
          <div className="confirmation-modal__item">
            <button 
              className="button"
              onClick={props.handleYesConfirmation}>
              Yes
            </button>
          </div>
          <div className="confirmation-modal__item">
            <button 
              className="button button--secondary"
              onClick={props.handleNoConfirmation}>
              No
            </button>
          </div>
        </div>
    </Modal>
);

export default ConfirmationModal;