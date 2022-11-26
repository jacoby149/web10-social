// see stuff about a friend + friend group
// pictures, media , text about them. 
// also configure ( manage notifications / unfriend / unfollow )

import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, MessageList, TypingIndicator, MessageSeparator, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import './bulma/css/bulma.min.css';
import emilyIco from "./images/avatar1.svg"


function Bio() {
    return (
        <R root t bt bb br bl theme={"light"}>
            <R l s={"50px"} bb>
                <C t va={"center"}>
                    <a href="/?mock=chat">[ ⇤ go back ]</a>
                </C>

                <C t va={"center"}><i><b>web10 -</b>  social</i></C>
                <R l >

                </R>
            </R>
            <R t tel>
                <R t ns bb s={"160px"} >

                    <div style={{ margin: "10px"}} class="columns is-centered">
                        <div class="column has-text-centered is-1">
                            <Avatar size={"lg"} src={emilyIco} name="Emily" />
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-2">
                            <b>Emily Shutman</b>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"24px"} h>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i>Phone Number : 347 - 209 - 2325</i>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"24px"} h>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i>bio : i am such a zoomer kid</i>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"24px"} h>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i><a href="https://jacobhoffman.tk/fps">FPS</a> Hi Score : 75 || <a href="https://jacobhoffman.tk/lessons/lesson6/index.html">Snake</a> Hi Score : 37</i>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"24px"} h>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i>3d voxel painting.</i>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"100px"}>
                    <div style={{ overflow: "hiden", position: "relative" }}>
                        <iframe width="100%" height="300px" style={{ position: "absolute", top: "-200px" }} src="https://mamafleet.github.io/3dpainter/?user=praemium-cranium&painting=main"></iframe>
                    </div>
                </R>
                <R t ns bb s={"24px"}>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i>add personal flare to your bio with ->  
                                <a href="https://web10.app">
                                    web10 apps!
                                </a>
                            </i>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"24px"}>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i>settings [modify below]</i>
                        </div>
                    </div>
                </R>
                <R t ns bb s={"24px"} h>
                    <div class="columns is-centered">
                        <div class="column has-text-centered is-4">
                            <i>unfriend || unfollow || mute </i> [ <input placeholder='password to confirm.'></input>] 
                        </div>
                    </div>
                </R>

            </R>
        </R>
    );
}

export default Bio;
