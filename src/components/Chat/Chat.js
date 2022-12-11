// see private messages between you and a friend / group.

import { R, C } from 'rectangles-npm'
import { ChatContainer, ConversationHeader, Avatar, InfoButton, TypingIndicator, MessageInput, MessageList, Message, MessageSeparator } from '@chatscope/chat-ui-kit-react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import emilyIco from "../../assets/images/avatar1.svg"
import TopBar from '../shared/TopBar';
import SideBar from '../shared/SideBar'
import { RawIcon } from '../shared/Icon'
import mockChat from '../../mocks/MockChat';
import TSMessage from './TSMessage';

function Chat({ I }) {
    var messageItems = [];
    var separatorCount = 0
    for (const [index, model] of mockChat.entries()) {
        const present = new Date(model["sentTime"]);
        const mostRecent = index === mockChat.length - 1;
        if (index == 0) {
            messageItems.push(
                <MessageSeparator key={index + separatorCount} content={present.toDateString()} />
            )
            separatorCount += 1;
        }
        else if (index > 1) {
            const past = new Date(mockChat[index - 1]["sentTime"]);
            if (present.getDay() - past.getDay() > 0) {
                messageItems.push(
                    <MessageSeparator key={index + separatorCount} content={present.toDateString()} />
                )
                separatorCount += 1;
            }
        }
        messageItems.push(
            <TSMessage key={index + separatorCount} model={model} mostRecent={mostRecent} I={I} />
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
                                <ConversationHeader.Content userName="Emily" info="@ api.web10.app/emily511" />
                                <ConversationHeader.Actions>
                                    <RawIcon>cube</RawIcon>
                                    <RawIcon>snake</RawIcon>
                                    <RawIcon>block-brick</RawIcon>
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
