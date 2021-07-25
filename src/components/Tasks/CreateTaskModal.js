import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ReactModal from 'react-modal';

function CreateTaskModal({ open, close, handleSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [assigned, setAssigned] = useState('');
  const [deadline, setDeadline] = useState('');

  ReactModal.setAppElement('#root');

  const DATE = useRef(null);

  useEffect(() => {
    DATE.current = `${new Date().getFullYear()}-${
      new Date().getUTCMonth() + 1 ? '0' : ''
    }${new Date().getUTCMonth() + 1}-${new Date().getDate()}`;

    setDeadline(DATE.current);
    return () => {
      setAssigned('');
      setContent('');
      setDeadline(DATE);
    };
  }, []);

  return (
    <ReactModal shouldCloseOnEsc isOpen={open}>
      <section className="task">
        <AiOutlineClose
          onClick={() => close()}
          className="close"
          size={26}
          color="#424242"
        />
        <div className="task__form">
          <form>
            <div className="input">
              <label>Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter title"
              />
            </div>
            <div className="input">
              <label>Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content"
              />
            </div>
            <div className="input">
              <label>Deadline</label>
              <input
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                type="date"
                min={DATE.current}
                placeholder="Enter date"
              />
            </div>
            <div className="input">
              <label>Assign</label>
              <select
                value={assigned}
                onChange={(e) => setAssigned(e.target.value)}
                placeholder="Select"
              >
                <option value="" label="Zeeshan"></option>
                <option value="" label="Zeeshan"></option>
                <option value="" label="Zeeshan"></option>
                <option value="" label="Zeeshan"></option>
                <option value="" label="Zeeshan"></option>
              </select>
            </div>

            <button onClick={handleSubmit} className="btn_basic">
              Submit
            </button>
          </form>
        </div>
      </section>
    </ReactModal>
  );
}

export default CreateTaskModal;
