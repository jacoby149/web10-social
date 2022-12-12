import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts/Contacts'
import Chat from './components/Chat/Chat'
import Feed from './components/Feed/Feed'
import Bio from './components/Bio/Bio'
import { useInterface } from './interfaces/Interface'
import React from 'react';
import './assets/bulma/css/bulma.min.css';
import './components/Components.css';
import Login from './components/Login/Login';
import StandAloneFeed from './components/Feed/StandAloneFeed';



function App() {
  const I = useInterface();
  window.I = I;
  switch (I.mode) {

    // chat like pages, that have private messages
    case "chat": return <Chat I={I} />;
    
    // bio like pages, that have a social-identity and social-bulletin 
    case "bio": return <Bio I={I} />; // contact-configuration here
    case "my-bio": return <Bio I={I} />;
    case "bio-edit": return <Bio I={I} />;
    case "bulletin-edit": return <Bio I={I} />;
    
    // feed like pages, that consist of posts with images,vids,audio, and html
    case "feed": return <StandAloneFeed I={I} />;
    
    case "login": return <Login I={I}></Login>;
    default: return <Contacts I={I} />;
  }
}

export default App;
