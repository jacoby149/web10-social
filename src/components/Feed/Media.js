function Media({ type, src }) {
    return type === "image" ?
        <img style={{ marginTop: "5px", marginRight: "5px", height: "128px" }} src={src} /> :
        <video src={src} style={{ height: "128px", marginTop: "5px", marginRight: "5px" }} controls >
            Your browser does not support audio in video tag.
        </video>

}

export default Media;