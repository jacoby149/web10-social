import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, TypingIndicator, MessageInput, MessageList, Message, MessageSeparator } from '@chatscope/chat-ui-kit-react';
import emilyIco from "../../assets/images/avatar1.svg"
import React from 'react';

function TSMessage({ model,I,mostRecent}) {
    const [showTime, setShowTime] = React.useState(mostRecent);
    const [selected,setSelected] = React.useState(false)
    function toggleShowTime() {
        setShowTime(!showTime);
    }
    function toggleSelected(){
        setSelected(!selected);
    }
    function onClick(){
        if (I.mode==="chat-edit")toggleSelected();
        toggleShowTime();
    }

    React.useEffect(()=>setSelected(false),[I.mode])

    const translatedModel = {...model};
    if (showTime && model.position==="normal") translatedModel.position = "first";
    else if (showTime && model.position==="last") translatedModel.position = "single";
    translatedModel.sentTime = new Date(model.sentTime).toLocaleTimeString();

    return (
        <Message onClick={onClick} model={translatedModel} className={`${I.theme} ${selected?"selected":""}`} >
            {(model.position==="first" || model.position==="single")?<Message.Header sender={translatedModel.sender}/>:""}
            {showTime?<Message.Footer sentTime={translatedModel.sentTime} />:""}
        </Message>
    );
}

export default TSMessage;