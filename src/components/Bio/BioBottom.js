import { R, C } from 'rectangles-npm'

function BioBottom({ I }) {
    return (
        <R t theme={I.theme}>
            <R t ns bb s={"24px"}>
                <div className="columns is-centered">
                    <div className="column has-text-centered is-4">
                        <i>add personal flare to your bio with ->
                            <a href="https://web10.app">
                                web10 apps!
                            </a>
                        </i>
                    </div>
                </div>
            </R>
            {I.mode === "bio" ?
                <R t ns bb s={"24px"}>
                    <div className="columns is-centered">
                        <div className="column has-text-centered is-4">
                            <i>settings [modify below]</i>
                        </div>
                    </div>
                </R> : <R t s={"0px"} />
            }
            {I.mode === "bio" ?

                <R t ns bb s={"24px"} h>
                    <div className="columns is-centered">
                        <div className="column has-text-centered is-4">
                            <i> <a>delete contact</a> || [ <input size={17} placeholder='type "delete" here'></input> ] </i>
                        </div>
                    </div>
                </R> : <R t s={"0px"} />

            }
        </R>
    )
}

export default BioBottom;