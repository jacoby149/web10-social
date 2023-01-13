
function InstallWeb10SocialAdapter(I) {
    I.socialAdapter = {}

    // get the SMR ready
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
            service: "contacts",
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
    I.wapi.SMROnReady(sirs, []);

    I.socialAdapter.loadContacts = function () {
        return wapi.read("contacts")
    }
    I.socialAdapter.AddContact = function (username, provider) {
        return wapi
            .create("contacts", {
                username: username,
                provider: provider,
                date_added: new Date(),
            })
            .then(loadNotes);
    }
    I.socialAdapter.deleteContacts = function (contactID) {
        return wapi.delete("contacts", { id: contactID })
    }

    I.socialAdapter.loadIdentity = function () {
        return wapi.read("identity")
    }
    I.socialAdapter.editIdentity = function (pic, name, bio) {
        return wapi.update("identity", {}, { pic: pic, name: name, bio: bio }).catch((error) => {
            //TODO if an update_one fails BECAUSE there are NO records, create a record...
            if (error.detail === "TODO DO THIS!!!") {
                wapi.create("identity", { bio: "add a bio!" })
            }
        })
    }

    I.socialAdapter.CreateMessage = function (message) {
        return wapi.create("messages", {
            message: messages,
            sentTime: new Date(),
            provider: wapi.readToken().provider,
            web10: wapi.readToken().username,
        })
    }
    I.socialAdapter.loadMessages = function () {
        return wapi.read("messages");
    }
    I.socialAdapter.deleteMessages = function (ids) {
        const responses = ids.map((id) => {
            return wapi.delete("messages", { id: id })
            //TODO add a .catch...
        })
        return responses
    }

    //TODO implement post functions
    I.socialAdapter.createPost = function (html, media) {
        return wapi.create("posts", {
            html: html,
            media: media,
            time: new Date(),
            provider: wapi.readToken().provider,
            username: wapi.readToken().username,
        })
    }
    I.socialAdapter.loadPosts = function () {
        return wapi.read("posts");
    }
    I.socialAdapter.editPost = function (html, media) {
        wapi.update("posts", {
            html: html,
            media: media,
        })
    }
    I.socialAdapter.deletePost = function (id) {
        return wapi.delete("posts", { id: id })
    }

    //TODO implement bulletin functions
    I.socialAdapter.loadBulletins = function () {
        return wapi.read("bulletin");
    }
    I.socialAdapter.deleteBulletin = function (id) {
        return wapi.delete("bulletin", { id: id })
    }
}

export default InstallWeb10SocialAdapter;