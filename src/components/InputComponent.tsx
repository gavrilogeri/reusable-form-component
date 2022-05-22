import React from "react";

export interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
  pattern?: string;
  errorMessage?: string;
}

const InputComponent: React.FC<
  InputProps & {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value: string;
  }
> = ({ label, onChange, errorMessage, ...otherProps }) => {
  return (
    <div className="inputBox">
      <div className="inputWithLabel">
        <label>{label}</label>
        <input onChange={onChange} {...otherProps} />
      </div>
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputComponent;
