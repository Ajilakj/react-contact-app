import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
// import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        {/* <AddContact/>
        <ContactList/> */}

       <h2>React project from scratch</h2>
      </header>
    </div>
  );
}

export default App;
