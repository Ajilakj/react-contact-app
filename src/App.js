// import './App.css';
import React ,{useState} from 'react'
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
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    console.log(contact);
  }
  return (
    <div className="ui container">
        <Header/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts}/>
        <Footer/>
    </div>
  );
}

export default App;
