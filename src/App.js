// import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
// import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="ui container">
        <Header/>
        <AddContact/>
        <ContactList/>
        <Footer/>
    </div>
  );
}

export default App;
