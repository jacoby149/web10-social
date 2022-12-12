import { RawIcon } from "../shared/Icon"
import mockMedia from "../../mocks/MockMedia";
import Media from "./Media";


function PostMaker({ I, postI }) {
    const mediaItems = mockMedia.map(
        (item, index) => <Media type={item.type} src={item.src} key={index}></Media>
    )
    return (
        <div>
            <div style={{ height: "5px" }} />
            <div class="card" style={{ marginLeft: "10px", marginRight: "5px" }}>
                <header class="card-header">

                    <p class="card-header-title">
                        {postI.editMode ?
                            <i onClick={postI.clearChanges} style={{ color: "orange", marginRight: "10px" }} className={"fa fa-2x fa-circle-xmark font-weight-bold"}></i> : ""
                        }
                        <img style={{height:"48px", marginRight:"10px"}} src={I.identity.pic} />
                        {postI.editMode ?
                            "Edit This Post"
                            :
                            "Make a New Post"
                        }
                    </p>

                    {postI.editMode ?
                        <div>
                            <button onClick={postI.saveChanges} style={{ margin: "15px", width: "130px" }} className={"button is-primary"}>Save Edits
                                <i style={{ marginLeft: "10px" }} className={"fa fa-check font-weight-bold"}></i>
                            </button>
                        </div>
                        :
                        <div>
                            <button style={{ margin: "15px", width: "130px" }} className={"button is-primary"}>Create Post</button>
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
                    {
                        postI.editMode ?
                            <a href="#" class="card-footer-item post">Delete Post <RawIcon >trash</RawIcon></a> : ""}

                    {/*<a href="#" class="card-footer-item post">Audio <RawIcon>microphone-stand</RawIcon></a>*/}
                </footer>
            </div>
        </div>)
}

export default PostMaker