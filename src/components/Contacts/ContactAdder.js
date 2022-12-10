import { Conversation, Avatar, ConversationList } from '@chatscope/chat-ui-kit-react'
import contactIco from "../../assets/images/Contact.png"

function ContactAdder({I}) {
    const toAdd = I.search?`add ${I.search}`:"add a contact";
    const label = I.search?"on web10 social?":"To Add A Contact";
    const status = I.search?"no. add anyway!":"Type In The Search Bar!"
    return (
        <Conversation name={toAdd} className={`contacts ${I.theme}`} lastSenderName={label} info={status}>
            <Avatar src={contactIco} name={"idk!"} />
        </Conversation>);
}

export default ContactAdder;