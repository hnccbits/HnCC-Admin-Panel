import React from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

export function Input({
  className = null,
  type = 'text',
  placeholder = '',
  required = null,
  label,
  ...otherProps
}) {
  return (
    <div className={`${className || ''} input-glb`}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        {...otherProps}
      />
    </div>
  );
}

export const Password = ({
  className = null,
  type = 'text',
  placeholder = '',
  required = null,
  label,
  show,
  setShow,
  ...otherProps
}) => {
  return (
    <div className={`${className || ''} input-glb`}>
      <label>{label}</label>
      <div className="password">
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          {...otherProps}
        />
        {show ? (
          <IoIosEye color="#e4e6eb" size={24} onClick={() => setShow(!show)} />
        ) : (
          <IoIosEyeOff
            color="#e4e6eb"
            size={24}
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    </div>
  );
};

export function FormInput({ label, ...otherProps }) {
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

export function DateTimePicker({ label, ...otherProps }) {
  return (
    <div className="date">
      <div className="col-label">
        <label>{label}</label>
      </div>
      <div className="col-input">
        <input {...otherProps} />
      </div>
    </div>
  );
}
