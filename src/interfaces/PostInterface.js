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
        switch (postI.mode) {

            // chat like pages, that have private messages
            case "edit": return postI.setMode("view");
            case "view": return postI.setMode("edit");
            default: return
        }
    }
    postI.deleteMedia = function (key) {
        const newMedia = postI.draftPost.media.filter((m, i) => i !== key)
        postI.setDraftPost({...postI.draftPost,media:newMedia})
    }
    postI.clearChanges = function () {
        postI.setDraftPost(postI.post);
    }
    postI.saveChanges = function () {
        I.savePostChanges(postI.draftPost)
        postI.toggleEditMode();
    }
    postI.createPost = function () {
        I.createPost(postI.draftPost);
    }
    postI.deletePost = function () {
        I.deletePost(postI.post.id);
    }

    return postI;
}

export default usePostInterface;