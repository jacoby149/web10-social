import { RawIcon } from "../shared/Icon"
import mockMedia from "../../mocks/MockMedia";
import Media from "./Media";


function PostMaker({ I, postI }) {

    function addMedia(files) {
        const links = files.map((f)=>{
            return URL.createObjectURL(f)
        });
        postI.setDraftPost({...postI.draftPost,media:links})
    }
    const mediaItems = postI.post.media.map(
        (item, index) => <Media I={I} postI={postI} type={item.type} src={item.src} key={index}></Media>
    )
    return (
        <div>
            <div style={{ height: "5px" }} />
            <div className="card" style={{ marginLeft: "10px", marginRight: "5px" }}>
                <header className="card-header">

                    <p className="card-header-title">
                        {postI.mode === "edit" ?
                            <i onClick={postI.clearChanges} style={{ color: "orange", marginRight: "10px" }} className={"fa fa-2x fa-circle-xmark font-weight-bold"}></i> : ""
                        }

                        {postI.mode === "create" && (postI.post.html || postI.media) ?
                            <i onClick={I.clearDraft} style={{ color: "orange", marginRight: "10px" }} className={"fa fa-2x fa-circle-xmark font-weight-bold"}></i> : ""
                        }


                        <img style={{ height: "48px", marginRight: "10px" }} src={I.identity.pic} />
                        {postI.mode === "edit" ?
                            "Edit This Post"
                            :
                            "Make a New Post"
                        }
                    </p>

                    {postI.mode === "edit" ?
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
                <div className="card-content">
                    <div className="content">
                        <div className="control">
                            <textarea className="textarea" defaultValue={postI.post.html} placeholder="What is on your mind??"></textarea>
                        </div>
                        <div>
                            {mediaItems}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">

                    <label className="card-footer-item post">
                        <input
                            type="file"
                            style={{ display: "none" }}
                            accept="video/*"
                            onChange={(event) => {
                                console.log(event.target.files);
                                addMedia(event.target.files);
                            }}
                            multiple={true}
                        />
                        Video <RawIcon>video-plus</RawIcon>
                    </label>

                    <label className="card-footer-item post">
                        <input
                            type="file"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={(event) => {
                                const files = Object.values(event.target.files);
                                addMedia(files);
                            }}
                            multiple={true}
                        />
                        Photo <RawIcon >photo</RawIcon>
                    </label>
                    {
                        postI.mode === "edit" ?
                            <a href="#" className="card-footer-item post">Delete Post <RawIcon >trash</RawIcon></a> : ""}

                    {/*<a href="#" className="card-footer-item post">Audio <RawIcon>microphone-stand</RawIcon></a>*/}
                </footer>
            </div>
        </div>)
}

export default PostMaker