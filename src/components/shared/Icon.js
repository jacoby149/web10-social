import {C,pass} from "rectangles-npm"

/* Custom Rectangles.js Icon Component */
function Icon(props){
    const iconClass = "fa-"+props.children;
    return(
        <C s={"50px"} {...pass(props)}>
            <i className={"fa "+ iconClass +" fa-2x font-weight-bold"}></i>
        </C>
    )
}

export default Icon;