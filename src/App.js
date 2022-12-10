import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts/Contacts'
import Chat from './components/Chat/Chat'
import Feed from './components/Feed/Feed'
import Bio from './components/Bio/Bio'
import BioEditor from './components/Bio/BioEditor'
import { useInterface } from './interfaces/Interface'
import React from 'react';
import './assets/bulma/css/bulma.min.css';
import './components/Components.css';
import Login from './components/Login/Login';



function App() {
  const I = useInterface();
  window.I = I;
  switch (I.mode) {
    case "chat": return <Chat I={I} />;
    case "bio": return <Bio I={I} />;
    case "bio-edit": return <BioEditor I={I} />;
    case "feed": return <Feed I={I} />;
    case "login": return <Login I={I}></Login>;
    default: return <Contacts I={I} />;
  }
}

export default App;
