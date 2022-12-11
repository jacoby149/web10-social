import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, MessageList, TypingIndicator, MessageSeparator, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import emilyIco from "../../assets/images/avatar1.svg"


function Identity({ I }) {
    return (
        <R t theme={I.theme}>
            <C t ha="center" va="center">
                <Avatar style={{ margin: "20px" }} size={"lg"} src={emilyIco} name="Emily" />
                {
                    I.mode === "my-bio-edit" ?
                        <button class="button is-warning is-small">upload photo</button> : ""
                }
            </C>
            <R t ns s={"24px"} h>
                <div className="columns is-centered">
                    <div className="column has-text-centered is-4">
                        {
                            I.mode === "my-bio-edit" ?
                                <i>[<input size="22" style={{ color: "gold" }} defaultValue="Jacob Hoffman"></input>]</i> :
                                <i>name : Jacob Hoffman</i>
                        }
                    </div>
                </div>
            </R>
            <R t ns bb s={"30px"} h>
                <div className="columns is-centered">
                    <div className="column has-text-centered is-4">
                        {
                            I.mode === "my-bio-edit" ?
                                <i>[<input size="32" style={{ color: "gold" }} defaultValue={"i am such a zoomer kid . . ."}></input>]</i> :
                                <i>bio : i am such a zoomer kid . . .</i>
                        }
                    </div>
                </div>
            </R>
        </R>)
}

export default Identity;