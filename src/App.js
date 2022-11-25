import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts'
import Chat from './components/Chat'

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.get("mock") == "chat") return <Chat/>
  if (urlParams.get("mock") == "contacts") return <Contacts/>
  else return <Contacts/>

}

export default App;
