import "./App.css";
import ContactTable from "./components/ContactTable";
import FormContact from "./components/FormContact";
import { useEffect, useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  mail: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setFirstName":
      return { ...state, firstName: action.value };
    case "setLastName":
      return { ...state, lastName: action.value };
    case "setPhone":
      return { ...state, phone: action.value };
    case "setMail":
      return { ...state, mail: action.value };
    default:
      return state;
  }
};

function App() {
  const [contactList, setContactList] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem("contacts"));
    console.log("recuperations contact  du local storage");
    console.log(localStorageContacts);
    if (localStorageContacts) {
      setContactList(localStorageContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
    console.log("enregistrement nouveau contact");
  }, [contactList]);

  return (
    <>
      <h1 className="text-center text-white mb-5">Mon carnet d'adresse</h1>
      <ContactTable contactList={contactList} />
      <FormContact state={state} dispatch={dispatch} addContact={addContact} />
    </>
  );
}

export default App;
