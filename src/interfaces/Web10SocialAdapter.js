import { wapiInit } from 'web10-npm';
import contactIco from "../assets/images/Contact.png"

function web10SocialAdapterInit() {

    // ports in the convenient web10 functionality into the social adapter.
    const local = true
    const web10SocialAdapter = local ?
        { ...wapiInit("http://auth.localhost", "rtc.localhost") } :
        { ...wapiInit("https://auth.web10.app", "rtc.web10.app") }

    const sirs = [
        {
            service: "identity",
            cross_origins: ["localhost", "web10social.netlify.app", "social.web10.app"],
            whitelist: [
                {
                    provider: ".*",
                    username: ".*",
                    read: true
                }
            ]
        },
        {
            service: "bulletin",
            cross_origins: ["localhost", "web10social.netlify.app", "social.web10.app"],
            provider: ".*",
            username: ".*",
            read: true
        },
        {
            service: "contact-addresses",
            cross_origins: ["localhost", "web10social.netlify.app", "social.web10.app"],
        },
        {
            service: "messages",
            cross_origins: ["localhost", "web10social.netlify.app", "social.web10.app"],
            whitelist: [
                {
                    provider: ".*",
                    username: ".*",
                    create: true
                }
            ]
        },
        {
            service: "posts",
            cross_origins: ["localhost", "web10social.netlify.app", "social.web10.app"],
            whitelist: [
                {
                    provider: ".*",
                    username: ".*",
                    read: true
                }
            ]
        },
    ];
    web10SocialAdapter.SMROnReady(sirs, []);

    web10SocialAdapter.loadContact = function (web10) {
        const [provider, user] = web10.split("/");
        return web10SocialAdapter.read("identity", {}, user, provider).then((response) => {
            //TODO add validation of data...
            if (response.data.length > 0) {
                const webContact = response.data[0]
                return webContact
            }
            else {
                return {
                    //TODO find a cool anonymous PNG
                    web10: web10,
                    name: "anonymous",
                    pic: contactIco,
                    bio: "anonymous"
                }
            }
        })
    }
    web10SocialAdapter.loadContactAddresses = function () {
        return web10SocialAdapter.read("contact-addresses");
    }

    web10SocialAdapter.loadContacts = function () {
        return web10SocialAdapter.loadContactAddresses().then((response) => {
            return response.data.map((c) => web10SocialAdapter.loadContact(c.web10))
        });
    }

    web10SocialAdapter.addContact = function (web10) {
        return web10SocialAdapter
            .create("contact-addresses", {
                web10: web10,
                date_added: new Date(),
            })
    }
    web10SocialAdapter.deleteContacts = function (contactID) {
        return web10SocialAdapter.delete("contacts", { id: contactID })
    }

    web10SocialAdapter.loadIdentity = function () {
        return web10SocialAdapter.read("identity")
    }
    web10SocialAdapter.editIdentity = function ({ web10, pic, name, bio }) {
        const newId = { web10: web10, pic: pic, name: name, bio: bio }
        return web10SocialAdapter.update("identity", {}, { $set: newId })
            .then((response) => {
                if (response.data.matchedCount === 0) {
                    web10SocialAdapter.create("identity", newId)
                }
            })
        // .catch((error) => {
        //     console.log(error)
        //     //TODO if an update_one fails BECAUSE there are NO records, create a record...
        //     if (error.detail === "TODO DO THIS!!!") {
        //         web10SocialAdapter.create("identity", { bio: "add a bio!" })
        //     }
        // })
    }

    web10SocialAdapter.CreateMessage = function (message) {
        return web10SocialAdapter.create("messages", {
            message: message,
            sentTime: new Date(),
            provider: web10SocialAdapter.readToken().provider,
            web10: web10SocialAdapter.readToken().username,
        })
    }
    web10SocialAdapter.loadMessages = function () {
        return web10SocialAdapter.read("messages");
    }
    web10SocialAdapter.deleteMessages = function (ids) {
        const responses = ids.map((id) => {
            return web10SocialAdapter.delete("messages", { id: id })
        })
        return responses
    }

    //TODO implement post functions
    web10SocialAdapter.createPost = function ({html, media}) {
        return web10SocialAdapter.create("posts", {
            html: html,
            media: media,
            time: new Date(),
            web10: `${web10SocialAdapter.readToken().provider}/${web10SocialAdapter.readToken().username}`
        })
    }
    web10SocialAdapter.loadMyPosts = function () {
        return web10SocialAdapter.read("posts");
    }
    web10SocialAdapter.loadPosts = function (web10) {
        const [provider, user] = web10.split("/");
        return web10SocialAdapter.read("posts", {}, user, provider)
            .then((response)=>{
                return response.data
        })
    }
    web10SocialAdapter.editPost = function (html, media) {
        web10SocialAdapter.update("posts", {
            html: html,
            media: media,
        })
    }
    web10SocialAdapter.deletePost = function (id) {
        return web10SocialAdapter.delete("posts", { id: id })
    }

    //TODO implement bulletin functions
    web10SocialAdapter.loadBulletins = function () {
        return web10SocialAdapter.read("bulletin");
    }
    web10SocialAdapter.deleteBulletin = function (id) {
        return web10SocialAdapter.delete("bulletin", { id: id })
    }

    return web10SocialAdapter;
}

export default web10SocialAdapterInit;