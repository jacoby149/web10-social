
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

    //TODO implement contact functions
    I.socialAdapter.loadContacts = function () {
        return
    }
    I.socialAdapter.AddContact = function () {
        return
    }
    I.socialAdapter.deleteContacts = function () {
        return
    }

    //TODO implement Identity functions
    I.socialAdapter.initializeIdentity = function () {
        return
    }
    I.socialAdapter.loadIdentity = function () {
        return
    }
    I.socialAdapter.editIdentity = function () {
        return
    }

    //TODO implement messaging functions
    I.socialAdapter.CreateMessage = function () {
        return
    }
    I.socialAdapter.loadMessages = function () {
        return
    }
    I.socialAdapter.deleteMessages = function () {
        return
    }

    //TODO implement post functions
    I.socialAdapter.createPost = function () {
        return
    }
    I.socialAdapter.loadPosts = function () {
        return
    }
    I.socialAdapter.editPost = function () {
        return
    }
    I.socialAdapter.deletePost = function () {
        return
    }

    //TODO implement bulletin functions
    I.socialAdapter.loadBulletins = function () {
        return
    }
    I.socialAdapter.deleteBulletin = function () {
        return
    }
}

export default InstallWeb10SocialAdapter;