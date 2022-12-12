import { RawIcon } from "../shared/Icon"
import mockMedia from "../../mocks/MockMedia";

function Media({ type, src }) {
    return type === "image" ?
        <img style={{ marginTop: "5px", marginRight: "5px", height: "128px" }} src={src} /> :
        <video src={src} style={{ height: "128px", marginTop: "5px", marginRight: "5px" }} controls >
            Your browser does not support audio in video tag.
        </video>

}

function PostMaker({ postI }) {
    const mediaItems = mockMedia.map(
        (item, index) => <Media type={item.type} src={item.src} key={index}></Media>
    )
    return (
        <div>
            <div style={{ height: "5px" }} />
            <div class="card" style={{ marginLeft: "5px", marginRight: "5px" }}>
                <header class="card-header">

                    <p class="card-header-title">
                        {postI.editMode ?
                            <div>
                                <button onClick={postI.toggleEditMode} style={{ width: "110px" }} className={"button is-danger is-small"}>delete post <i style={{ margin:"10px",color: "white" }} className={"fa fa-trash font-weight-bold"}></i> </button>                            
                            </div>
                            :
                            "Make a Post"
                        }
                    </p>

                    {postI.editMode ?
                        <div>
                            <button onClick={postI.toggleEditMode} style={{ margin: "10px", width: "110px" }} className={"button is-primary is-small"}>Save Edits
                            <i style={{ margin:"10px" }} className={"fa fa-check font-weight-bold"}></i>
                             </button>
                        </div>
                        :
                        <div>
                            <button style={{ margin: "10px", width: "130px" }} className={"button is-primary is-small"}>Create Post</button>
                        </div>

                    }
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="control">
                            <textarea class="textarea" placeholder="What is on your mind??"></textarea>
                        </div>
                        <div>
                            {mediaItems}
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item post">
                        Video <RawIcon>video-plus</RawIcon></a>
                    <a href="#" class="card-footer-item post">Photo <RawIcon >photo</RawIcon></a>
                    {/*<a href="#" class="card-footer-item post">Audio <RawIcon>microphone-stand</RawIcon></a>*/}
                </footer>
            </div>
        </div>)
}

export default PostMaker