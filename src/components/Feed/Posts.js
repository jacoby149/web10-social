
import { pass, R, C, T } from 'rectangles-npm'
import DOMPurify from 'dompurify'

function Posts({posts}) {
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

function Post({post}) {

    return (
        // <C va = {'top'} p = {'10px 10px 10px 10px'} s = {'200px'}>
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
                            <strong>{post.name}</strong> <br></br>[ <small style={{color:"teal"}}><u>{post.email}</u></small> ]  <small>{post.time}</small>
                        </p>

                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.text) }} />

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
        //   </C>
    )
}

export { Posts };