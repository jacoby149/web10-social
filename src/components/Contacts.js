// see people you are messaging, the last message.
// active status, etc.

import { R, C } from 'rectangles-npm'
import { Search, Conversation, Avatar, ConversationList } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './bulma/css/bulma.min.css';
import './Contacts.css';
import Icon from "./shared/Icon"
import Branding from "./shared/Branding"

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
      <R l bb s={"55px"}>
        <Branding/>
        <R l s ={"110px"}>
          <Icon onClick={I.toggleMenuCollapsed}>bars</Icon>
          <Icon onClick={I.toggleTheme}>moon</Icon>
        </R>
        <C l tel>
          <Search style={{width:"100%",marginRight:"30px"}} placeholder="Search..." />
        </C>
        <R t s={"20px"}></R>
      </R>
      <R l tel>
        <R t br c={I.menuCollapsed} s={"250px"}>
          <C t bb h s={"40px"} va="center">
            Contacts
          </C>
          <C t bb h s={"40px"} va="center">
            My Bio
          </C>
          <C t bb h s={"40px"} va="center">
            <a href="/?mock=feed"> Feed </a>
          </C>
          <C t bb h s={"40px"} va="center">
            <a href="https://vasturiano.github.io/3d-force-graph/example/img-nodes/"> 3D Feed [Coming Soon] </a>
          </C>
        </R>
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
