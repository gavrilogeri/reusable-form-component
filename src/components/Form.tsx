import React, { useState } from "react";
import { uuidv4 } from "../utils";
import InputComponent, { InputProps } from "./InputComponent";

interface Props {
  inputFields: InputProps[];
}

const Form: React.FC<Props> = ({ inputFields }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((inputField) => (
        <InputComponent key={uuidv4()} {...inputField} />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default Form;
