import React from 'react';

function usePostInterface(I,post) {
    // a convenient interface for post components to interact with the application
    const postI = {};
    postI.post = post;
    [postI.draftPost, postI.setDraftPost] = React.useState(postI.post);

    // modes are view, edit and create
    [postI.mode, postI.setMode] = React.useState("view");

    postI.toggleEditMode = function () {
        postI.mode === "edit" ?
            postI.setMode("view") :
            postI.setMode("edit");
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
        I.createPost(postI.draftPost);
    }
    postI.deletePost = function () {
        I.deletePost(postI.post.id);
    }

    return postI;
}

export default usePostInterface;