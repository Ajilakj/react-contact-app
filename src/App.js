// import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
// import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
        <Header/>
        <AddContact/>
        {/* <ContactList/> */}

       <h2>React project from scratch</h2>
    </div>
  );
}

export default App;
