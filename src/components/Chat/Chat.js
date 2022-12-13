// see private messages between you and a friend / group.

import { R, C } from 'rectangles-npm'
import { ChatContainer, ConversationHeader, Avatar, InfoButton, TypingIndicator, MessageInput, MessageList, MessageSeparator } from '@chatscope/chat-ui-kit-react';
import TopBar from '../shared/TopBar';
import SideBar from '../shared/SideBar'
import { RawIcon } from '../shared/Icon'
import TSMessage from './TSMessage';
import React from 'react'

function MessageItems({ I }) {
    var messageItems = [];
    var separatorCount = 0

    for (const [index, model] of I.currentMessages.entries()) {
        const present = new Date(model["sentTime"]);
        const mostRecent = index === I.currentMessages.length - 1;
        if (index == 0) {
            messageItems.push(
                <MessageSeparator key={index + separatorCount} content={present.toDateString()} />
            )
            separatorCount += 1;
        }
        else if (index > 1) {
            const past = new Date(I.currentMessages[index - 1]["sentTime"]);
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
        <>
            {messageItems}
        </>
    )
}

function Chat({ I }) {
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
                                <Avatar onClick={() => I.setMode("bio")} src={I.currentContact.pic} name="Emily" />
                                <ConversationHeader.Content userName={I.currentContact.name} info={`@ ${I.currentContact.web10}`} />
                                <ConversationHeader.Actions>

                                    {I.mode === "chat" ?
                                        <>
                                            <RawIcon onClick={() => I.setMode("chat-edit")}>square-check</RawIcon>
                                            <RawIcon>cube</RawIcon>
                                            <RawIcon>snake</RawIcon>
                                            <InfoButton onClick={() => I.setMode("bio")} />
                                        </> :
                                        <>
                                            <RawIcon onClick={() => I.setMode("chat")}>square-x</RawIcon>
                                            <div style={{ color: "orange", marginRight: "10px" }}><i>undo<br />changes</i></div>
                                            <RawIcon>trash</RawIcon>
                                            <div style={{ color: "orange" }}><i>delete<br />selected</i></div>
                                        </>
                                    }

                                </ConversationHeader.Actions>
                            </ConversationHeader>
                            <MessageList className={I.theme} typingIndicator={<TypingIndicator content="Emily is typing" />}>
                                <MessageItems I={I} ></MessageItems>
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
