import React from 'react';

function FormInput({ label, ...otherProps }) {
  return (
    <div className="meetRow">
      <div className="meetLabel">
        <label>{label}</label>
      </div>
      <div className="meetInput">
        <input {...otherProps} />
      </div>
    </div>
  );
}

export default FormInput;
// type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 id="title"
//                 placeholder="Title of the meet"
//                 required
