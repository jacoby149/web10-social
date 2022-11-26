// see people you are messaging, the last message.
// active status, etc.

import { R, C } from 'rectangles-npm'
import { Search, Conversation, Avatar, ConversationList } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './bulma/css/bulma.min.css';

import lillyIco from "./images/avatar1.svg"
import joeIco from "./images/avatar1.svg"
import emilyIco from "./images/avatar1.svg"
import kaiIco from "./images/avatar1.svg"
import akaneIco from "./images/avatar1.svg"
import eliotIco from "./images/avatar1.svg"
import zoeIco from "./images/avatar1.svg"
import patrikIco from "./images/avatar1.svg"


function Contacts() {
  return (
    <R root t bt bb br bl theme={"light"}>
      <R t s={"23px"}></R>
      <R l s={"32px"}>
        <R t s={"120px"}>
          <R t s={"4px"} />
          <C t va={"center"}><i><b>web10 -</b>  social</i></C>
        </R>
        <R t s={"300px"} >
          <Search placeholder="Search..." />
        </R>
        <R t s={"120px"}>
          <R t s={"4px"} />

          <C>
            <a href="/?mock=feed"> [ Feed → ] </a>
          </C>
        </R>
      </R>
      <R t s={"20px"} bb></R>
      <R t tel>
        <div>
          <ConversationList>
            <a href="/?mock=chat">

              <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
                <Avatar src={emilyIco} name="Emily" />
              </Conversation>
            </a>

            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar src={lillyIco} name="Lilly" />
            </Conversation>

            <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
              <Avatar src={joeIco} name="Joe" />
            </Conversation>

            <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
              <Avatar src={kaiIco} name="Kai" />
            </Conversation>

            <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
              <Avatar src={akaneIco} name="Akane" />
            </Conversation>

            <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
              <Avatar src={eliotIco} name="Eliot" />
            </Conversation>

            <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
              <Avatar src={zoeIco} name="Zoe" />
            </Conversation>

            <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
              <Avatar src={patrikIco} name="Patrik" />
            </Conversation>
            <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
              <Avatar src={eliotIco} name="Eliot" />
            </Conversation>

            <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
              <Avatar src={zoeIco} name="Zoe" />
            </Conversation>

            <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
              <Avatar src={patrikIco} name="Patrik" />
            </Conversation>

          </ConversationList>
        </div>
      </R>
    </R>
  );
}

export default Contacts;
