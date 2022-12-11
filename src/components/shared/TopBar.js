import { R, C, pass } from "rectangles-npm"
import Branding from "./Branding"
import { Icon } from "./Icon"
import { Search } from '@chatscope/chat-ui-kit-react'

function EditButton() {
    return <i style={{ color: "orange", margin: "10px" }} className={"fa fa-pencil fa-2x font-weight-bold"}></i>
}

/* Top Bar of web10 social */
function TopBar(props) {
    const I = props.I;
    return (
        <R l bb s={"55px"} {...pass(props)}>
            <Branding />
            <R l s={"110px"}>
                <Icon onClick={I.toggleMenuCollapsed}>bars</Icon>
                <Icon onClick={I.toggleTheme}>moon</Icon>
            </R>
            <C l tel>
                {I.mode !== "bio" && I.mode !== "my-bio" && I.mode !== "my-bio-edit" ?
                    <Search onClearClick={() => I.setSearch("")} onChange={(v) => I.setSearch(v)} style={{ width: "100%", marginRight: "30px" }} placeholder="Search..." /> : ""
                }
            </C>
            {I.mode === "my-bio" ?
                <C r s={"110px"} onClick={() => I.setMode("my-bio-edit")}>
                    <i style={{ color: "orange", }}><u>Edit Bio</u></i> <EditButton></EditButton>
                </C> : <C r s={"0px"}></C>
            }
            {I.mode === "my-bio-edit" ?
                <C r s={"140px"}>
                    <button onClick={()=>I.setMode("my-bio")} class="button is-primary is-small" style={{marginRight:"10px"}}>save</button>
                    <button onClick={()=>I.setMode("my-bio")} class="button is-danger is-small">cancel</button>
                </C> : <C r s={"0px"}></C>
            }

            <R t s={"20px"}></R>
        </R>
    )
}

export default TopBar;