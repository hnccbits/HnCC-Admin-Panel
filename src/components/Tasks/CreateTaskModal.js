import React, { useState } from 'react';
import ReactModal from 'react-modal';

function CreateTaskModal({ open }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [assigned, setAssigned] = useState('');
  return (
    <ReactModal isOpen={open}>
      <section>
        <div>
          <form>
            <input
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="Enter Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <input type="date" />
          </form>
        </div>
      </section>
    </ReactModal>
  );
}

export default CreateTaskModal;
