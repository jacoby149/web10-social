import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, TypingIndicator, MessageInput, MessageList, Message, MessageSeparator } from '@chatscope/chat-ui-kit-react';

function TSMessage({ key, model }) {
    return (
        <Message key={index} model={model} >
            <Avatar src={emilyIco} name={"Emily"} />
            <Message.Header sender="Emily"></Message.Header>
            <Message.Footer sentTime="2 mins ago" />
        </Message>
    );
}

export default TSMessage;