import React from "react";
import "./inputComponent.css";
export interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  label,
  name,
  type,
}) => {
  return (
    <div className="inputBox">
      <label>{label}</label>
      <input placeholder={placeholder} name={name} type={type} />
    </div>
  );
};

export default InputComponent;
