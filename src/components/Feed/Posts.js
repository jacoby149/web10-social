
import { R } from 'rectangles-npm'
import React from 'react'
import PostMaker from './PostMaker';
import PostViewer from './PostViewer';

function Posts({ I, posts }) {
    const final = [];
    for (const [index, post] of posts.entries()) {
        final.push(<Post key={index} I={I} post={post}></Post>)
    }
    return (
        <R t tel>
            {final}
        </R>
    )
}

function Post({ I, post }) {

    // a convenient interface for post components to interact with the application
    const postI = {}
    postI.post = post;
    // modes are view, edit and create
    [postI.mode, postI.setMode] = React.useState("view");
    postI.toggleEditMode = function () {
        postI.mode === "edit" ?
            postI.setMode("view") :
            postI.setMode("edit");
    }

    postI.clearChanges = function () {
        postI.toggleEditMode();
    }

    postI.saveChanges = function () {
        postI.toggleEditMode();
    }

    return postI.mode==="edit" ?
        <PostMaker I={I} postI={postI}></PostMaker> :
        <PostViewer I={I} postI={postI}></PostViewer>
}

export { Posts };