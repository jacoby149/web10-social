// see public postings of your friends.
// see replies to those public postings.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { R, C } from 'rectangles-npm'
import { Search, ChatContainer, ConversationHeader, Avatar, VoiceCallButton, VideoCallButton, InfoButton, MessageList, TypingIndicator, MessageSeparator, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import emilyIco from "../../assets/images/avatar1.svg"
import { Posts } from './Posts'
import TopBar from '../shared/TopBar';
import SideBar from '../shared/SideBar';
import PostMaker from './PostMaker';
import mockFeed from '../../mocks/MockFeed';
import mockWall from '../../mocks/MockWall';

function Feed({ I }) {
    const mockData = I.mode==="feed"?mockFeed:mockWall;
    return (
        <R root t bt bb br bl theme={I.theme}>
            <TopBar I={I} />
            <R l tel>
                <SideBar I={I}></SideBar>
                <R t tel>
                    <div className={`post-container ${I.theme}`} style={{
                        height: "100%"
                    }}>
                        <div style={{maxWidth:"768px",margin:"auto"}}>
                            <PostMaker postI={{editMode:false}} ></PostMaker>
                            <Posts posts={mockData}></Posts>
                        </div>
                    </div>
                </R>
            </R>
        </R>
    );
}

export default Feed;
