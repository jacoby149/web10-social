import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import mockContacts from '../mocks/MockContacts'
import mockFeed from '../mocks/MockFeed';
import mockWall from '../mocks/MockWall';
import mockChat from '../mocks/MockChat';
import mockIdentity from '../mocks/MockIdentity';

function useMockInterface() {
    const I = {};
    [I.theme, I.setTheme] = React.useState("dark");
    [I.menuCollapsed,I.setMenuCollapsed] = React.useState(true);
    [I.mode,I._setMode] = React.useState("contacts");
    [I.search,I.setSearch] = React.useState("");

    [I.contacts, I.setContacts] = React.useState(mockContacts);
    [I.currentContact,I.setCurrentContact] = React.useState(I.contacts[0]);
    [I.draftPost,I.setDraftPost] = React.useState({});
    [I.feedPosts,I.setFeedPosts] = React.useState(mockFeed);
    [I.wallPosts,I.setWallPosts] = React.useState(mockWall);
    [I.currentMessages,I.setCurrentMessages] = React.useState(mockChat);
    [I.identity,I.setIdentity] = React.useState(mockIdentity);

    I.getPosts = function(web10){
        return I.feedPosts.filter((p)=>p.web10===web10)
    }

    I.getContact = function(web10){
        const cMap = {};
        I.contacts.map((c)=>cMap[c.web10]=c);
        return cMap[web10];
    }

    I.isMe = function(web10) {
        return web10 === I.identity.web10
    }


    I.chat = function(web10){
        I.setCurrentContact(I.getContact(web10))
        I.setMode("chat");
    }

    I.setMode = function(mode){
        I.setMenuCollapsed(true);
        I.setSearch("")
        I._setMode(mode);
    }

    I.toggleMenuCollapsed = function () {
        I.setMenuCollapsed(!I.menuCollapsed)
    }

    I.toggleTheme = function () {
        I.theme=="dark"?I.setTheme("light"):I.setTheme("dark")
    }

    return I;
}

export default useMockInterface;