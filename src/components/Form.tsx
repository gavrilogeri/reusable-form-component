import React, { useEffect, useState } from "react";
import { UserType, uuidv4 } from "../utils";
import InputComponent, { InputProps } from "./InputComponent";

interface Props {
  inputFields: InputProps[];
  defaultValues: any;
}

const Form: React.FC<Props> = ({ inputFields, defaultValues }) => {
  const [values, setValues] = useState(defaultValues);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
  };
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //   useEffect(() => {
  //     console.log(values);
  //   }, [values]);

  return (
    <form onSubmit={handleSubmit}>
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
