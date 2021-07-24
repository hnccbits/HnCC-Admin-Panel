import React from 'react';
import { AiFillCheckCircle, AiFillQuestionCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

function Tasks({ data }) {
  return (
    <div className="task__component">
      <div className="header">
        <h3>{data ? data.title : 'NA'}</h3>
      </div>
      <div className="dfracjsb">
        <div className="col__row_6 details">
          <h3>
            Assigned to: <span>{data.asigned_to}</span>
          </h3>
          <h3>
            Date: <span>{new Date(data.start_date).toDateString()}</span>
          </h3>
        </div>
        <div>
          {data ? (
            data.completed ? (
              <AiFillCheckCircle size={28} color="green" />
            ) : (
              <MdCancel size={28} color="red" />
            )
          ) : (
            <AiFillQuestionCircle size={28} color="yellow" />
          )}
        </div>
      </div>
      <div className="content">
        <p>{data.content}</p>
      </div>
      {/* <div className="dfracjsb btn_container">
        <button className="btn_basic remind">Remind</button>
      </div> */}
    </div>
  );
}

export default Tasks;
