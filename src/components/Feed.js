// see public postings of your friends.
// see replies to those public postings.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, MessageList, TypingIndicator, MessageSeparator, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './bulma/css/bulma.min.css';
import emilyIco from "./images/avatar1.svg"
import {Posts} from './Posts'

function Feed() {
    const [posts, setPosts] = React.useState([{
        "name":"emily",
        "profile":"me.png",
        "time":"10:04:59 AM",
        "images":["lala.png","haha.png"],
        "files":["hehe.pdf","lelel.pdf"],
        "text":"what up my name is emily makin a post",    
        "email": "raraje@gmail.com",
        "subject": "heeheehee"
    },
    {
        "name":"lilly",
        "profile":"me.png",
        "time":"10:04:59 AM",
        "images":["lala.png","haha.png"],
        "files":["hehe.pdf","lelel.pdf"],
        "text":"what up my name is lilly i am also makin a post",    
        "email": "raraje@gmail.com",
        "subject": "hoohoohoo"
    },
    {
        "name":"tom",
        "profile":"me.png",
        "time":"10:04:59 AM",
        "images":["lala.png","haha.png"],
        "files":["hehe.pdf","lelel.pdf"],
        "text":"what up my name is tom call me rarara",    
        "email": "raraje@gmail.com",
        "subject": "RARARA"
    }
]);
    return (
        <R root t bt bb br bl theme={"light"}>
            <R l s={"50px"} bb>
                <C t va={"center"}>
                    <a href="/">[ ⇤ go back ]</a>
                </C>

                <C t va={"center"}><i><b>web10 -</b>  social</i></C>
                <R l >

                </R>
            </R>
            <R t ns tel>
                <div style={{
                    height: "100%"
                }}>
                  <Posts posts={posts}></Posts>  

                </div>
            </R>
        </R>
    );
}

export default Feed;
