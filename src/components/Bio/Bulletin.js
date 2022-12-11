import { R, C } from 'rectangles-npm'
import DOMPurify from 'dompurify';
import mockBulletin from '../../mocks/MockBulletin';
import React from 'react'
import {
    RawIcon
} from '../shared/Icon';
function BulletinItem({ I, height, html }) {
    var config = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false }
    const [edit,setEdit] = React.useState(false);
    function toggleEdit(){setEdit(!edit)};
    return (
        <R l bb s={height} theme={edit?"brick":I.theme} >
            { edit ?
                <C t br h ha="center" p={"0px"} s={"30px"}>
                    <i style={{ color: "pink" }} className={"fa fa-trash font-weight-bold"}></i>
                </C> :
                <C s={"0px"}></C>
            }
            <R t ns tel h dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, config) }} />
            {I.mode === "bulletin-edit" ?
                <C onClick={toggleEdit} t bl h ha="center" p={"0px"} s={"30px"}>
                    <i style={{ color: "yellow" }} className={"fa fa-pencil font-weight-bold"}></i>
                </C> :
                <C s={"0px"}></C>
            }

        </R>
    )
}

function Bulletin({ I }) {
    const BulletinItems = mockBulletin.map(
        (entry, index) => <BulletinItem key={index} I={I} height={entry.height} html={entry.html}></BulletinItem>
    )
    return (
        <R t theme={I.theme}>
            {BulletinItems}
        </R>
    )
}

export default Bulletin;