import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#app');

export default (props) => (
    <Modal
        isOpen={props.modalOpen}
        contentLabel="Remove Expense"
        closeTimeoutMS={200}
        className="modal"
        onRequestClose={props.closeModal}
    >
        <h1 className="modal__title">Are you sure you?</h1>
        <button onClick={props.remove} className="modal__body button">Yup. Remove.</button>
    </Modal>
);