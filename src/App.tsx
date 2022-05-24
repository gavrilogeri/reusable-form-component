import "./App.scss";
import Form from "./components/Form";
import {
  defaultValues,
  inputFields,
  persistUserToLocalStorages,
} from "./utils";

function App() {
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
