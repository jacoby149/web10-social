import { R, C, pass } from "rectangles-npm"
import Branding from "./Branding"
import { Icon } from "./Icon"
import { Search } from '@chatscope/chat-ui-kit-react'

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
                {I.mode !== "bio" && I.mode !== "bio-edit" ?
                    <Search onClearClick={() => I.setSearch("")} onChange={(v) => I.setSearch(v)} style={{ width: "100%", marginRight: "30px" }} placeholder="Search..." /> : ""
                }
            </C>
            <R t s={"20px"}></R>
        </R>
    )
}

export default TopBar;