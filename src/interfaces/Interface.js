import React from 'react';
import mockContacts from '../mocks/MockContacts'
import mockFeed from '../mocks/MockFeed';
import mockWall from '../mocks/MockWall';
import mockChat from '../mocks/MockChat';
import mockIdentity from '../mocks/MockIdentity';
import mockBulletin from '../mocks/MockBulletin';
import web10SocialAdapterInit from './Web10SocialAdapter';
import defaultIdentity from '../mocks/defaultIdentity';
import onlySettled from './onlySettled';

function useInterface() {
    const I = {};
    //initialize web10
    I.socialAdapter = web10SocialAdapterInit();
    //initialize frontend states
    [I.theme, I.setTheme] = React.useState("dark");
    [I.menuCollapsed, I.setMenuCollapsed] = React.useState(true);
    [I.mode, I._setMode] = React.useState("login");
    [I.search, I.setSearch] = React.useState("");

    [I.contactAddresses, I.setContactAddresses] = React.useState([]);
    [I.contacts, I.setContacts] = React.useState([]);
    [I.currentContact, I.setCurrentContact] = React.useState(null);
    [I.searchContact, I.setSearchContact] = React.useState(null);

    [I.feedPosts, I.setFeedPosts] = React.useState([]);
    [I.wallPosts, I.setWallPosts] = React.useState([]);

    [I.bulletin, I.setBulletin] = React.useState([]);

    [I.identity, I.setIdentity] = React.useState();
    [I.draftIdentity, I.setDraftIdentity] = React.useState(I.identity);

    [I.currentMessages, I.setCurrentMessages] = React.useState([]);
    [I.selectedMessages, I.setSelectedMessages] = React.useState([]);
    [I.typingIndicator, I.setTypingIndicator] = React.useState("Emily is typing ...");

    //frontend functionality
    I.help = function () {
        console.log("the real web10 interface!")
    }

    I.initApp = async function () {
        I.setMode("contacts");
        // load contacts
        I.socialAdapter.loadContacts()
            .then((response) => {
                onlySettled(response).then((contacts) => I.setContacts(contacts))
            })
        //load identity
        I.socialAdapter.loadIdentity()
            .then((response) => {
                const provider = I.socialAdapter.readToken()["provider"]
                const username = I.socialAdapter.readToken()["username"]
                const web10 = `${provider}/${username}`
                const id = response.data.length > 0 ?
                    response.data[0] : defaultIdentity(web10)
                I.setIdentity(id);
                I.setDraftIdentity(id);
                return id
            }).then((myID) => {

                //load feed posts
                I.socialAdapter.loadContactAddresses().then((response) => {
                    const feedContacts = [...response.data, myID]
                    onlySettled(feedContacts.map((c) => I.socialAdapter.loadPosts(c.web10)))
                        .then((contactPostsList) => {
                            const feedPosts = [...contactPostsList, I.wallPosts].flat();
                            I.setFeedPosts(feedPosts.sort((p) => p.time).reverse())
                        })
                })

            })
        //load wall posts
        I.socialAdapter.loadMyPosts().then((response) => {
            I.setWallPosts(response.data);
        })
    }

    I.login = function () {
        I.socialAdapter.openAuthPortal();
    }
    I.logout = function () {
        I.socialAdapter.signOut();
        I.setMode("login");
    }

    I.runSearch = function (query) {
        function chatFilter(m) {
            return m.message.toLowerCase().includes(query.toLowerCase());
        }
        function contactFilter(c) {
            return c.name.toLowerCase().includes(query.toLowerCase());
        }
        function postFilter(p) {
            return p.html.toLowerCase().includes(query.toLowerCase());
        }

        function filter() {
            switch (I.mode) {

                // chat like pages, that have private messages
                case "chat": return I.setCurrentMessages(mockChat.filter(chatFilter));
                case "chat-edit": return I.setCurrentMessages(mockChat.filter(chatFilter));

                // bio like pages, that have a social-identity and social-bulletin 
                case "bio": return I.setFeedPosts(mockFeed.filter(postFilter));
                case "my-bio": return I.setWallPosts(mockWall.filter(postFilter));
                case "bio-edit": return I.setWallPosts(mockWall.filter(postFilter));
                case "bulletin-edit": return I.setWallPosts(mockWall.filter(postFilter));

                // feed like pages, that consist of posts with images,vids,audio, and html
                case "feed": return I.setFeedPosts(mockFeed.filter(postFilter));

                //case "contacts": return I.setContacts(mockContacts.filter(contactFilter));
            }
        }
        filter();
        if (I.mode === "contacts") {
            const web10 = query.includes("/") ? query : `api.web10.app/${query}`;
            const [provider, user] = web10.split("/")
            I.socialAdapter.read("identity", {}, user, provider)
                .then((r) => {
                    if (r.data.length > 0) I.setSearchContact(r.data[0])
                })
                .catch((e) => I.setSearchContact(null))
        }
        I.setSearch(query);
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
        I.socialAdapter.deletePost(id).then(() => {
            I.setWallPosts(I.wallPosts.filter(p => id !== p.id))
            I.setFeedPosts(I.feedPosts.filter(p => id !== p.id))
        })
    }
    I.createPost = function (draftPost) {
        // for now, randomly generate an id...
        I.socialAdapter.createPost(draftPost).then((response) => {
            const IDedDraftPost = { ...draftPost, id: response.data._id }
            I.setWallPosts([IDedDraftPost].concat(I.wallPosts));
            I.setFeedPosts([IDedDraftPost].concat(I.feedPosts));
        })
    }

    I.addContact = function () {

        I.socialAdapter.addContact(I.searchContact.web10).then((response) => {
            I.setContacts([...I.contacts, I.searchContact]);
            I.runSearch("");
        })
    }

    I.deleteCurrentContact = function () {
        I.setContacts(I.contacts.filter((c) => c.id !== I.currentContact.id));
        I.setMode("contacts");
    }

    I.cancelIdentityChanges = function () {
        I.setDraftIdentity(I.identity);
    }
    I.saveIdentityChanges = function () {
        I.socialAdapter.editIdentity(I.draftIdentity).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });
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

    I.sendMessage = function (string) {
        const message = {
            id: Math.random(1000000000000000),
            message: string,
            sentTime: String(new Date()),
            web10: I.identity.web10,
        }
        I.setCurrentMessages([...I.currentMessages].concat([message]))
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

    React.useEffect(() => {
        // inits the web10 portion of the app
        if (I.socialAdapter.isSignedIn()) I.initApp()
        else I.socialAdapter.authListen(I.initApp)
    }, []
    )

    return I;
}

export default useInterface;