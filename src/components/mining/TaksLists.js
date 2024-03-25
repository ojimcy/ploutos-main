import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

const TaskListItem = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [handle, setHandle] = useState('');

  const handleDoneButtonClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setHandle(''); 
  };

  const handleInputChange = (e) => {
    setHandle(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic (e.g., sending the handle to the server)
    console.log('Handle submitted:', handle);
    setModalOpen(false);
    setHandle('');
  };

  return (
    <>
      <div className="task-list-item">
        <div className="task-icon">
          <i className="material-icons">assignment</i>
        </div>
        <div className="task-info">
          <div className="task-title">Telegram</div>
          <div className="task-details">Task details go here</div>
        </div>
        <button className="done-button" onClick={handleDoneButtonClick}>
          Done
        </button>
      </div>

      <Modal show={modalOpen} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Handle for Telegram</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter your handle"
            value={handle}
            onChange={handleInputChange}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskListItem;
