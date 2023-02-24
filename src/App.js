// import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
// import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function App() {
  const contacts=[
    {
      id:1,
      "name":"Ashlyn",
      "email":"ashlynbobby@gmail.com"
    },
    {
      id:2,
      "name":"Abigail",
      "email":"abigailbobby@gmail.com"
    },
  ];
  return (
    <div className="ui container">
        <Header/>
        <AddContact/>
        <ContactList contacts={contacts}/>
        <Footer/>
    </div>
  );
}

export default App;
