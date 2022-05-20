import React, { useState } from "react";
import { uuidv4 } from "../utils";
import InputComponent, { InputProps } from "./InputComponent";

interface Props {
  inputFields: InputProps[];
}

const Form: React.FC<Props> = ({ inputFields }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((inputField) => (
        <InputComponent
          key={uuidv4()}
          label={inputField.label}
          name={inputField.name}
          placeholder={inputField.placeholder}
          type={inputField.type}
        />
      ))}
    </form>
  );
};

export default Form;
