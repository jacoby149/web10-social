import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, TypingIndicator, MessageInput, MessageList, Message, MessageSeparator } from '@chatscope/chat-ui-kit-react';
import emilyIco from "../../assets/images/avatar1.svg"
import React from 'react';

function TSMessage({ model,I,mostRecent}) {
    const [showTime, setShowTime] = React.useState(mostRecent);
    function toggleShowTime() {
        setShowTime(!showTime);
    }
    const translatedModel = {...model};
    if (showTime && model.position==="normal") translatedModel.position = "first";
    else if (showTime && model.position==="last") translatedModel.position = "single";
    translatedModel.sentTime = new Date(model.sentTime).toLocaleTimeString();

    return (
        <Message onClick={toggleShowTime} model={translatedModel} className={I.theme} >
            {(model.position==="first" || model.position==="single")?<Message.Header sender={translatedModel.sender}/>:""}
            {showTime?<Message.Footer sentTime={translatedModel.sentTime} />:""}
        </Message>
    );
}

export default TSMessage;