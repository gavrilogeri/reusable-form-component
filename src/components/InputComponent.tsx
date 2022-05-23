import React, { useState } from "react";

export interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  name: string;
  pattern?: string;
  errorMessage?: string;
  required?: boolean;
}

const InputComponent: React.FC<
  InputProps & {
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value: string;
  }
> = ({ label, onChange, errorMessage, required, ...otherProps }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="inputBox">
      <label>{label}</label>
      <div>
        <input
          onChange={onChange}
          required={required}
          onBlur={() => {
            setIsActive(true);
          }}
          className={isActive.toString()}
          {...otherProps}
        />
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default InputComponent;
