
import DOMPurify from 'dompurify'

function PostViewer({postI}) {
    const post = postI.post;
    var config = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false }
    return (
        <div className="box" style={{ "margin": "5px" }}>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>
                                {post.name} &nbsp;
                                {post.email === "api.web10.app/jacoby149" ?
                                    <i
                                        onClick={postI.toggleEditMode}
                                        style={{ color: "orange" }}
                                        className={"fa fa-pencil font-weight-bold"}></i> : ""
                                }
                            </strong>

                            <br></br>[ <small style={{ color: "teal" }}><u>{post.email}</u></small> ]  <small>{post.time}</small>
                        </p>

                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.text, config) }} />

                    </div>
                    {/*<nav className="level is-mobile">
                <div className="level-left">
                    <a className="level-item" aria-label="reply">
                    <span className="icon is-small">
                        <i className="fas fa-reply" aria-hidden="true"></i>
                    </span>
                    </a>
                    <a className="level-item" aria-label="retweet">
                    <span className="icon is-small">
                        <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                    </a>
                    <a className="level-item" aria-label="like">
                    <span className="icon is-small">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                    </span>
                    </a>
                </div>
</nav>*/}
                </div>
            </article>
        </div>
    )
}

export default PostViewer;