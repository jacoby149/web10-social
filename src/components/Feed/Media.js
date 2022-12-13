function Content({ type, src, I, postI }) {
    const content = type === "image" ?
        <img style={{ marginTop: "5px", marginRight: "5px", height: "128px" }} src={src} /> :
        <video src={src} style={{ height: "128px", marginTop: "5px", marginRight: "5px" }} controls >
            Your browser does not support audio in video tag.
        </video>

    return content;
}

function Media({ type, src, I, postI }) {
    return (<>
        {postI.mode === "view" ?
            "" :
            <i style={{ position: "absolute", color: "#ffff77dd", marginTop: "8px", marginLeft: "5px" }} className={"fa fa-2x fa-rectangle-xmark font-weight-bold"}></i>}
        {
            postI.mode === "create" ?
                <Content type={type} src={src}></Content>
                :
                <Content type={type} src={src}></Content>}
    </>
    );

}

export default Media;