import { Sidebar } from "@chatscope/chat-ui-kit-react";
import { R, C, pass } from "rectangles-npm"

/* Top Bar of web10 social */
function SideBar(props) {
    const I = props.I;
    return (
        <R t br c={I.menuCollapsed} s={"200px"} {...pass(props)}>
            <C onClick={()=>I.setMode("contacts")} t bb h s={"40px"} va="center">
                Contacts
            </C>
            <C onClick={()=>I.setMode("bio")} t bb h s={"40px"} va="center">
                My Bio
            </C>
            <C onClick={()=>I.setMode("feed")} t bb h s={"40px"} va="center">
                Feed
            </C>
        </R>)
}

export default SideBar;