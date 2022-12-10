// see private messages between you and a friend / group.

import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, TypingIndicator, MessageInput, MessageList, Message,MessageSeparator } from '@chatscope/chat-ui-kit-react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import emilyIco from "../../assets/images/avatar1.svg"
import TopBar from '../shared/TopBar';
import SideBar from '../shared/SideBar'
import { RawIcon } from '../shared/Icon'
import { mockChat } from '../../interfaces/Mocks';

function Chat({ I }) {
    var messageItems = [];
    for (const [index, model] of mockChat.entries()) {
        const present = new Date(model["sentTime"]);
        if (index == 0) {
            messageItems.push(
                <MessageSeparator key={`s${index}`} content={present.toDateString()} />
            )
        }
        else if (index > 1) {
            const past = new Date(mockChat[index - 1]["sentTime"]);
            if (present.getDay() - past.getDay() > 0) {
                messageItems.push(
                    <MessageSeparator key={`s${index}`} content={present.toDateString()} />
                )
            }
        }
        messageItems.push(
            <Message key={index} model={model} />
        )
    }


    return (
        <R root t bt bb br bl theme={I.theme}>
            <TopBar I={I} />
            <R l tel>
                <SideBar I={I}></SideBar>
                <R t ns tel>
                    <div style={{
                        height: "100%"
                    }}>
                        <ChatContainer>
                            <ConversationHeader className={I.theme}>
                                <Avatar onClick={() => I.setMode("bio")} src={emilyIco} name="Emily" />
                                <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
                                <ConversationHeader.Actions>
                                    <RawIcon>cube</RawIcon>
                                    <RawIcon>snake</RawIcon>
                                    <InfoButton onClick={() => I.setMode("bio")} />
                                </ConversationHeader.Actions>
                            </ConversationHeader>

                            <MessageList className={I.theme} typingIndicator={<TypingIndicator content="Emily is typing" />}>

                                {messageItems}

                            </MessageList>
                            <MessageInput className={I.theme} placeholder="Type message here" />
                        </ChatContainer>
                    </div>
                </R>
            </R>
        </R>
    );
}

export default Chat;
