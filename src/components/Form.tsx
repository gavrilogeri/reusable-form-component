import React, { useEffect, useState } from "react";
import { UserType, uuidv4 } from "../utils";
import InputComponent, { InputProps } from "./InputComponent";
import "./formStyles.scss";

interface Props {
  inputFields: InputProps[];
  onSubmit: any;
  formTitle: string;
  defaultValues: any;
}

const Form: React.FC<Props> = ({
  inputFields,
  defaultValues,
  formTitle,
  onSubmit,
}) => {
  const [values, setValues] = useState(defaultValues);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formTitle, values);
  };
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={"genericForm"}>
      <h1>{formTitle}</h1>
      {inputFields.map((inputField) => (
        <InputComponent
          value={values[inputField.name]}
          {...inputField}
          onChange={onChange}
        />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default Form;
