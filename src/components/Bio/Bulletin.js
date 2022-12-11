import { R, C } from 'rectangles-npm'

function Bulletin({I}) {
    return (
        <R t theme={I.theme}>
            <R t ns bt bb s={"24px"} h>
                <div className="columns is-centered">
                    <div className="column has-text-centered is-4">
                        <i>
                            <a href="https://jacobhoffman.tk/lessons/lesson6/index.html">Snake Game</a> Hi Score : 37
                        </i>
                    </div>
                </div>
            </R>
            <R t ns bb s={"24px"} h>
                <div className="columns is-centered">
                    <div className="column has-text-centered is-4">
                        <i>3d Voxel Painting.</i>
                    </div>
                </div>
            </R>
            <R t ns bb s={"100px"}>
                <div style={{ overflow: "hiden", position: "relative" }}>
                    <iframe width="100%" height="300px" style={{ position: "absolute", top: "-200px" }} src="https://mamafleet.github.io/3dpainter/?user=praemium-cranium&painting=main"></iframe>
                </div>
            </R>

        </R>
    )
}

export default Bulletin;