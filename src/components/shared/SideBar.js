import { Sidebar } from "@chatscope/chat-ui-kit-react";
import { R, C, pass } from "rectangles-npm"

/* Top Bar of web10 social */
function SideBar(props) {
    const I = props.I;
    return (
        <R t br c={I.menuCollapsed} s={"250px"} {...pass(props)}>
            <C t bb h s={"40px"} va="center">
                Contacts
            </C>
            <C t bb h s={"40px"} va="center">
                My Bio
            </C>
            <C t bb h s={"40px"} va="center">
                <a href="/?mock=feed"> Feed </a>
            </C>
            <C t bb h s={"40px"} va="center">
                <a href="https://vasturiano.github.io/3d-force-graph/example/img-nodes/"> 3D Feed [Coming Soon] </a>
            </C>
        </R>)
}

export default SideBar;