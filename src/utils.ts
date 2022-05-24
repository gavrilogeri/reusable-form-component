//helper function for generating universally unique indentifier

import { InputProps } from "./components/InputComponent";

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export interface UserType {
  firstName: string;
  lastName: string;
  address: string;
}

export function persistUserToLocalStorages(
  formTitleKey: string,
  value: string
) {
  localStorage.setItem(formTitleKey, JSON.stringify(value));
}
export const inputFields: Array<InputProps> = [
  {
    label: "First Name",
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    pattern: `^wooga[.][a-zA-Z]+$`,
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
export const defaultValues = {
  firstName: "",
  lastName: "",
  address: "",
};
