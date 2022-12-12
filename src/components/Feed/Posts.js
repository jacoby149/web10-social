
import { R } from 'rectangles-npm'
import React from 'react'
import PostMaker from './PostMaker';
import PostViewer from './PostViewer';

function Posts({ posts }) {
    const final = [];

    for (const [index, post] of posts.entries()) {
        final.push(<Post key={index} post={post}></Post>)
    }
    return (
        <R t tel>
            {final}
        </R>
    )
}

function Post({ post }) {

    // a convenient interface for post components to interact with the application
    const postI = {}
    postI.post = post;
    [postI.editMode, postI.setEditMode] = React.useState(false);
    postI.toggleEditMode = function () {
        postI.setEditMode(!postI.editMode);
    }

    postI.clearChanges = function () {
        postI.toggleEditMode();
    }

    postI.saveChanges = function () {
        postI.toggleEditMode();
    }

    
    return postI.editMode ?
            <PostMaker postI={postI}></PostMaker> :
            <PostViewer postI={postI}></PostViewer>
}

export { Posts };