import React from 'react';

function usePostInterface(I, post = null) {
    // a convenient interface for post components to interact with the application
    const postI = {};
    const empty = { html: "", media: [] }
    postI.post = post === null ? empty : post;
    [postI.draftPost, postI.setDraftPost] = React.useState(postI.post);

    // modes are view, edit and create
    [postI.mode, postI.setMode] = React.useState(post === null ? "create" : "view");

    postI.toggleEditMode = function () {
            if (postI.mode === "edit") postI.setMode("view");
            else if (postI.mode === "view") postI.setMode("edit")
    }
    postI.deleteMedia = function (key) {
        console.log(key)
        const newMedia = postI.draftPost.media.filter((m, i) => i !== key)
        postI.setDraftPost({...postI.draftPost,media:newMedia})
    }
    postI.clearChanges = function () {
        postI.setDraftPost(postI.post);
        postI.toggleEditMode();
    }
    postI.saveChanges = function () {
        I.savePostChanges(postI.draftPost)
        postI.toggleEditMode();
    }
    postI.createPost = function () {
        I.createPost(
            {...postI.draftPost,
                time:new Date().toLocaleTimeString(),
                web10:I.identity.web10
            });
        postI.clearChanges();
    }
    postI.deletePost = function () {
        I.deletePost(postI.post.id);
        postI.toggleEditMode();
    }

    return postI;
}

export default usePostInterface;