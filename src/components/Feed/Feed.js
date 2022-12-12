import { Posts } from './Posts'
import PostMaker from './PostMaker';


function Feed({I}) {
    const posts = I.mode === "feed" ? I.feedPosts : I.wallPosts;
    return (
        <div className={`post-container ${I.theme}`} style={{

        }}>
            <div style={{ maxWidth: "768px", margin: "auto" }}>
                <div style={{ height: "20px" }}></div>
                <PostMaker postI={{ editMode: false }} ></PostMaker>
                <Posts posts={posts}></Posts>
                <div style={{ height: "20px" }}></div>
            </div>
        </div>
    )
}

export default Feed;
