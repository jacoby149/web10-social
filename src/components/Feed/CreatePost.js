import { RawIcon } from "../shared/Icon"

function CreatePost() {
    return (
        <div>
            <div style={{ height: "5px" }} />
            <div class="card" style={{ marginLeft: "5px", marginRight: "5px" }}>
                <header class="card-header">
                    <p class="card-header-title">
                        Make a Post
                    </p>
                        <button style={{margin:"10px"}} className={"button is-primary is-small"}>Create Post</button>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="control">
                            <textarea class="textarea" placeholder="What is on your mind??"></textarea>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item post">
                        Video <RawIcon>video-plus</RawIcon></a>
                    <a href="#" class="card-footer-item post">Photo <RawIcon >photo</RawIcon></a>
                    <a href="#" class="card-footer-item post">Audio <RawIcon>microphone-stand</RawIcon></a>
                </footer>
            </div>
        </div>)
}

export default CreatePost