import React from "react";
import "./inputComponent.css";
export interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
}

const InputComponent: React.FC<
  InputProps & {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value: string;
  }
> = ({ placeholder, label, name, type, value, onChange }) => {
  return (
    <div className="inputBox">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
