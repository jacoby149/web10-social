// see stuff about a friend + friend group
// pictures, media , text about them. 
// also configure ( manage notifications / unfriend / unfollow )

import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, MessageList, TypingIndicator, MessageSeparator, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import emilyIco from "../../assets/images/avatar1.svg"
import TopBar from '../shared/TopBar';
import SideBar from '../shared/SideBar';

function EditButton() {
    return <i style={{ color: "purple" }} className={"fa fa-pencil font-weight-bold"}></i>
}

function AddButton() {
    return <i style={{ color: "azure" }} className={"fa fa-camera-retro font-weight-bold"}></i>
}

function DeleteButton() {
    return <i style={{ color: "gold" }} className={"fa fa-trash font-weight-bold"}></i>
}


function BioEditor({ I }) {
    return (
        <R root t bt bb br bl theme={I.theme}>
            <TopBar I={I}></TopBar>
            <R l tel>
                <SideBar I={I}></SideBar>
                <R t tel>
                    <C t ha="center" va="center">
                        <Avatar style={{ margin: "20px" }} size={"lg"} src={emilyIco} name="Emily" />
                    </C>
                    <R t ns s={"24px"} h>
                        <div class="columns is-centered">
                            <div class="column has-text-centered is-4">
                                <i>Name : Emily Shutman</i> <EditButton></EditButton>
                            </div>
                        </div>
                    </R>
                    <R t ns s={"24px"} h>
                        <div class="columns is-centered">
                            <div class="column has-text-centered is-4">
                                <i>Phone Number : 347 - 209 - 2325</i>  <EditButton></EditButton>
                            </div>
                        </div>
                    </R>
                    <R t ns bb s={"30px"} h>
                        <div class="columns is-centered">
                            <div class="column has-text-centered is-4">
                                <i>Bio : i am such a zoomer kid . . .</i>  <EditButton></EditButton>
                            </div>
                        </div>
                    </R>
                    <R t ns bb s={"24px"} h>
                        <div class="columns is-centered">
                            <div class="column has-text-centered is-4">
                                <i>
                                    <a href="https://jacobhoffman.tk/lessons/lesson6/index.html">Snake Game</a> Hi Score : 37
                                </i>
                            </div>
                        </div>
                    </R>
                    <R t ns bb s={"24px"} h>
                        <div class="columns is-centered">
                            <div class="column has-text-centered is-4">
                                <i>3d Voxel Painting.</i>
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
                </R>
            </R>
        </R>
    );
}

export default BioEditor;
