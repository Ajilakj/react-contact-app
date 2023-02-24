// import './App.css';
import React ,{useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function App() {
  // const contacts=[
  //   {
  //     id:1,
  //     "name":"Ashlyn",
  //     "email":"ashlynbobby@gmail.com"
  //   },
  //   {
  //     id:2,
  //     "name":"Abigail",
  //     "email":"abigailbobby@gmail.com"
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contactList"
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: uuidv4(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    console.log(id);
    const newContactList = contacts.filter((contact) =>{
      return (contact.id !== id);
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(fromLocal) setContacts(fromLocal);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className="ui container">
        <Header/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        <Footer/>
    </div>
  );
}

export default App;
