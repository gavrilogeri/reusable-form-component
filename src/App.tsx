import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import { InputProps } from "./components/InputComponent";
import { persistUserToLocalStorages, UserType, uuidv4 } from "./utils";
import background from "./assets/images/formbackground.jpg";

function App() {
  const inputFields: Array<InputProps & { key: string }> = [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "First Name",
      type: "text",
      pattern: `\^wooga.\.+$`,
      required: true,
      errorMessage: "Name must start wooga.(your name here)",
      key: uuidv4(),
    },
    {
      label: "Last Name",
      name: "lastName",
      placeholder: "First Name",
      type: "text",
      key: uuidv4(),
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Address",
      type: "text",
      key: uuidv4(),
    },
  ];
  const defaultValues = {
    firstName: "",
    lastName: "",
    address: "",
  };

  return (
    <div className="App">
      <Form
        inputFields={inputFields}
        defaultValues={defaultValues}
        formTitle="User Form"
        onSubmit={persistUserToLocalStorages}
      />
    </div>
  );
}

export default App;
