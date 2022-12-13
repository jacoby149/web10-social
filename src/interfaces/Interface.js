import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import mockContacts from '../mocks/MockContacts'
import mockFeed from '../mocks/MockFeed';
import mockWall from '../mocks/MockWall';
import mockChat from '../mocks/MockChat';
import mockIdentity from '../mocks/MockIdentity';
import mockDraftPost from '../mocks/MockDraftPost';
import mockBulletin from '../mocks/MockBulletin';

function useInterface() {
    const I = {};
    [I.theme, I.setTheme] = React.useState("dark");
    [I.menuCollapsed, I.setMenuCollapsed] = React.useState(true);
    [I.mode, I._setMode] = React.useState("login");
    [I.search, I.setSearch] = React.useState("");

    [I.contacts, I.setContacts] = React.useState(mockContacts);
    [I.currentContact, I.setCurrentContact] = React.useState(I.contacts[0]);

    [I.draftPost, I.setDraftPost] = React.useState(mockDraftPost);
    [I.feedPosts, I.setFeedPosts] = React.useState(mockFeed);
    [I.wallPosts, I.setWallPosts] = React.useState(mockWall);

    [I.bulletin, I.setBulletin] = React.useState(mockBulletin);

    [I.identity, I.setIdentity] = React.useState(mockIdentity);
    [I.draftIdentity, I.setDraftIdentity] = React.useState(I.identity);

    [I.currentMessages, I.setCurrentMessages] = React.useState(mockChat);
    [I.selectedMessages, I.setSelectedMessages] = React.useState([]);

    I.help = function () {
        console.log("the real web10 interface!")
    }

    I.runSearch = function (query) {
        function chatFilter(m){
            m.message.toLowerCase().includes(query.toLowerCase());
        }
        function contactFilter(c){
            c.name.toLowerCase().includes(query.toLowerCase());
        }
        function postFilter(p){
            p.html.toLowerCase().includes(query.toLowerCase());
        }

        switch (I.mode) {

            // chat like pages, that have private messages
            case "chat": I.setCurrentMessages(mockChat.filter(chatFilter));
            case "chat-edit": I.setCurrentMessages(mockChat.filter(chatFilter));

            // bio like pages, that have a social-identity and social-bulletin 
            case "bio": I.setWallPosts(mockWall.filter(postFilter));
            case "my-bio": I.setWallPosts(mockWall.filter(postFilter));
            case "bio-edit": I.setWallPosts(mockWall.filter(postFilter));
            case "bulletin-edit": I.setWallPosts(mockWall.filter(postFilter));

            // feed like pages, that consist of posts with images,vids,audio, and html
            case "feed": I.setFeedPosts(mockWall.filter(postFilter));
        }
        I.setSearch(query)
    }

    I.getPosts = function (web10) {
        return I.feedPosts.filter((p) => p.web10 === web10)
    }
    I.getContact = function (web10) {
        const cMap = {};
        I.contacts.map((c) => cMap[c.web10] = c);
        return cMap[web10];
    }

    I.isMe = function (web10) {
        return web10 === I.identity.web10
    }


    I.savePostChanges = function (draftPost) {
        I.setWallPosts(I.wallPosts.map(p => draftPost.id === p.id ? draftPost : p))
        I.setFeedPosts(I.feedPosts.map(p => draftPost.id === p.id ? draftPost : p))
    }
    I.deletePost = function (id) {
        I.setWallPosts(I.wallPosts.filter(p => id !== p.id))
        I.setFeedPosts(I.feedPosts.filter(p => id !== p.id))
    }
    I.createPost = function (draftPost) {
        // for now, randomly generate an id...
        const randIDDraftPost = { ...draftPost, id: Math.random(1000000000000000) }
        I.setWallPosts([randIDDraftPost].concat(I.wallPosts));
        I.setFeedPosts([randIDDraftPost].concat(I.feedPosts));
    }

    I.deleteCurrentContact = function () {
        I.setContacts(I.contacts.filter((c) => c.id !== I.currentContact.id));
        I.setMode("contacts");
    }

    I.cancelIdentityChanges = function () {
        I.setDraftIdentity(I.identity);
    }
    I.saveIdentityChanges = function () {
        I.setIdentity(I.draftIdentity);
    }

    I.deleteBulletin = function (id) {
        I.setBulletin(I.bulletin.filter((b) => b.id !== id));
    }

    I.chat = function (web10) {
        I.setCurrentContact(I.getContact(web10))
        //I.setCurrentMessages
        I.setMode("chat");
    }

    I.selectMessage = function (id) {
        I.setSelectedMessages(I.currentMessages.filter((m) => m.id === id).concat(I.selectedMessages))
    }
    I.deSelectMessage = function (id) {
        I.setSelectedMessages(I.selectedMessages.filter((m) => m.id !== id))
    }
    I.deleteSelectedMessages = function () {
        const current = I.currentMessages.filter((m) => !I.selectedMessages.includes(m))
        I.setCurrentMessages(current);
        I.setSelectedMessages([]);
    }
    I.resetSelectedMessages = function () {
        I.setSelectedMessages([]);
    }


    I.setMode = function (mode) {
        I.setMenuCollapsed(true);
        I.setSearch("")
        I._setMode(mode);
    }

    I.toggleMenuCollapsed = function () {
        I.setMenuCollapsed(!I.menuCollapsed)
    }

    I.toggleTheme = function () {
        I.theme == "dark" ? I.setTheme("light") : I.setTheme("dark")
    }

    return I;
}

export default useInterface;