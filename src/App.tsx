import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import { InputProps } from "./components/InputComponent";
import { persistUserToLocalStorages, UserType, uuidv4 } from "./utils";
import background from "./assets/images/formbackground.jpg";

function App() {
  const inputFields: Array<InputProps> = [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "First Name",
      type: "text",
      pattern: `\^wooga[.][^\s+].\.+$`,
      required: true,
      errorMessage: "Name must start wooga.(your name here)",
    },
    {
      label: "Last Name",
      name: "lastName",
      placeholder: "First Name",
      type: "text",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Address",
      type: "text",
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
