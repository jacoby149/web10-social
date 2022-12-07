import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts'
import Chat from './components/Chat'
import Feed from './components/Feed'
import Bio from './components/Bio'
import {useInterface} from './interfaces/Interface'

function App() {
  const I = useInterface();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.get("mock") == "chat") return <Chat/>
  if (urlParams.get("mock") == "bio") return <Bio/>
  if (urlParams.get("mock") == "feed") return <Feed/>
  else return <Contacts I={I}/>

}

export default App;
