import React, { useEffect, useState } from "react";
import { uuidv4 } from "../utils";
import InputComponent, { InputProps } from "./InputComponent";
import "./formStyles.scss";

interface Props {
  inputFields: InputProps[];
  onSubmit: any;
  formTitle: string;
  defaultValues: any;
}

type InputPropsWIthId = InputProps & {
  uuid: string;
};

const Form: React.FC<Props> = ({
  inputFields,
  defaultValues,
  formTitle,
  onSubmit,
}) => {
  const [values, setValues] = useState(defaultValues);
  const [inputFieldsWithKeys, setInputFieldsWithKeys] = useState<
    InputPropsWIthId[]
  >([]);
  useEffect(() => {
    let inputFieldsWithKeys = inputFields.map((inputField) => {
      return {
        ...inputField,
        uuid: uuidv4(),
      };
    });

    setInputFieldsWithKeys(inputFieldsWithKeys);
  }, [inputFields]);

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
      {inputFieldsWithKeys.map((inputField) => (
        <InputComponent
          value={values[inputField.name]}
          {...inputField}
          onChange={onChange}
          key={inputField.uuid}
        />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default Form;
