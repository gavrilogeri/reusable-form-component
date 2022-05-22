import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import { InputProps } from "./components/InputComponent";
import { UserType, uuidv4 } from "./utils";
import background from "./assets/images/formbackground.jpg";

function App() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    meatType: "",
    doneness: "",
  });

  const inputFields: Array<InputProps & { key: string }> = [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "First Name",
      type: "text",
      pattern: `\^wooga.\.+$`,
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
      />
    </div>
  );
}

export default App;
