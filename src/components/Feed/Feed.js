import { Posts } from './Posts'
import PostMaker from './PostMaker';


function Feed({I}) {
    const posts = I.mode === "feed" ? I.feedPosts : I.wallPosts;
    console.log(I)
    return (
        <div className={`post-container ${I.theme}`}>
            <div style={{ maxWidth: "768px", margin: "auto" }}>
                <div style={{ height: "20px" }}></div>
                <PostMaker I={I} postI={{ editMode: false }} ></PostMaker>
                <Posts I={I} posts={posts}></Posts>
                <div style={{ height: "20px" }}></div>
            </div>
        </div>
    )
}

export default Feed;
