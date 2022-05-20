import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { InputProps } from "./components/InputComponent";
import { uuidv4 } from "./utils";

function App() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    meatType: "",
    doneness: "",
  });

  const inputFields: Array<InputProps> = [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "First Name",
      type: "text",
    },
    {
      label: "Last Name",
      name: "firstName",
      placeholder: "First Name",
      type: "text",
    },
    {
      label: "Meat Type",
      name: "meatType",
      placeholder: "Which type of meat you want? (pork, chicken, beef...)",
      type: "text",
    },
  ];

  return (
    <div className="App">
      <Form inputFields={inputFields} />
    </div>
  );
}

export default App;
