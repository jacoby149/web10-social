// see people you are messaging, the last message.
// active status, etc.

import { R, C } from 'rectangles-npm'
import { Conversation, Avatar, ConversationList } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './Components.css';
import TopBar
  from './shared/TopBar';
import Sidebar from './shared/SideBar';

function Contacts({ I }) {
  const contactItems = I.contacts.map((contact, index) => {
    return <Conversation key={index} onClick={()=>I.setMode("chat")} name={contact.name} className={`contacts ${I.theme}`} lastSenderName={contact.lastSenderName} info={contact.message}>
      <Avatar src={contact.pic} name={contact.name} />
    </Conversation>

  });

  return (
    <R root t bt bb br bl onClick={I.toggleTheme} theme={I.theme}>
      <TopBar I={I} />
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
