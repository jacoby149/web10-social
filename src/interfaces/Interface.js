import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import mockContacts from '../mocks/MockContacts'
import mockFeed from '../mocks/MockFeed';
import mockWall from '../mocks/MockWall';
import mockChat from '../mocks/MockChat';

function useInterface() {
    const I = {};
    [I.theme, I.setTheme] = React.useState("dark");
    [I.menuCollapsed,I.setMenuCollapsed] = React.useState(true);
    [I.mode,I._setMode] = React.useState("contacts");
    [I.search,I.setSearch] = React.useState("");

    [I.contacts, I.setContacts] = React.useState(mockContacts);
    [I.currentContact,I.setCurrentContact] = React.useState("");
    [I.feedPosts,I.setFeedPosts] = React.useState(mockFeed);
    [I.wallPosts,I.setWallPosts] = React.useState(mockWall);
    [I.currentMessages,I.setCurrentMessages] = React.useState(mockChat)

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

export { useInterface };