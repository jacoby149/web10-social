// see private messages between you and a friend / group.

import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, MessageList, TypingIndicator, MessageSeparator, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './bulma/css/bulma.min.css';
import emilyIco from "./images/avatar1.svg"


function Chat() {
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
                    <ChatContainer>
                        <ConversationHeader>
                            <Avatar src={emilyIco} name="Emily" />
                            <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
                            <ConversationHeader.Actions>
                                <VoiceCallButton />
                                <VideoCallButton />
                                <a href="/?mock=bio">
                                    <InfoButton />
                                </a>
                            </ConversationHeader.Actions>
                        </ConversationHeader>

                        <MessageList typingIndicator={<TypingIndicator content="Emily is typing" />}>

                            <MessageSeparator content="Saturday, 30 November 2019" />

                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "single"
                            }}>
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "me",
                                direction: "outgoing",
                                position: "single"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "first"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "normal"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "normal"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "last"
                            }}>
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "first"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "normal"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "normal"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "last"
                            }} />

                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "first"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "last"
                            }}>
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>

                            <MessageSeparator content="Saturday, 31 November 2019" />

                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "single"
                            }}>
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "me",
                                direction: "outgoing",
                                position: "single"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "first"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "normal"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "normal"
                            }} avatarSpacer />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "last"
                            }}>
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "first"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "normal"
                            }} />
                            <Message model={{
                                message: "Hello my friend",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "normal"
                            }} />
                            <Message model={{
                                message: "FOLLOW THE BELOW INSTRUCTIONS",
                                sentTime: "15 mins ago",
                                direction: "outgoing",
                                position: "last"
                            }} />

                            <Message model={{
                                message: "CLICK THE INFO ICON",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "first"
                            }} avatarSpacer />
                            <Message model={{
                                message: "INFO ICON GOES TO BIO",
                                sentTime: "15 mins ago",
                                sender: "Emily",
                                direction: "incoming",
                                position: "last"
                            }}>
                                <Avatar src={emilyIco} name={"Emily"} />
                            </Message>

                        </MessageList>
                        <MessageInput placeholder="Type message here" />
                    </ChatContainer>
                </div>
            </R>
        </R>
    );
}

export default Chat;