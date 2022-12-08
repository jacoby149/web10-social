// see people you are messaging, the last message.
// active status, etc.

import { R, C } from 'rectangles-npm'
import {Conversation, Avatar, ConversationList } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './bulma/css/bulma.min.css';
import './Contacts.css';
import TopBar
 from './shared/TopBar';
 import Sidebar from './shared/SideBar';
// an individual contact.
function Contact({ name, lastSenderName, pic, message, theme }) {
  return (
    <a href="/?mock=chat">
      <Conversation name={name} className={`contacts ${theme}`} lastSenderName={lastSenderName} info={message}>
        <Avatar src={pic} name={name} />
      </Conversation>
    </a>

  )
}

function Contacts({ I }) {
  const contactItems = I.contacts.map((contact,index) => {
      return <Contact 
        key={index}
        name={contact.name}
        pic = {contact.pic}
        lastSenderName = {contact.lastSenderName}
        message = {contact.message}
        theme={I.theme}
      />  
    });
  
  return (
    <R root t bt bb br bl onClick={I.toggleTheme} theme={I.theme}>
      <TopBar I ={I}/>
      <R l tel>
        <Sidebar I={I}></Sidebar>
        <R t tel>
          <div>
            <ConversationList>
              {contactItems}
            </ConversationList>
          </div>
        </R>
      </R>
    </R>
  );
}

export default Contacts;
