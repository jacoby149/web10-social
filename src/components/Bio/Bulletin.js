import { R, C } from 'rectangles-npm'
import DOMPurify from 'dompurify';
import mockBulletin from '../../mocks/MockBulletin';
import {
    RawIcon
} from '../shared/Icon';
function BulletinItem({ I, height, html }) {
    var config = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false }
    return (
        <R l bb s={height} theme={I.theme} >
            <R t ns tel h dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html, config) }} />
            {I.mode === "my-bio-edit" ?
                <C t bl h ha="center" p={"0px"} s={"50px"}>
                        <i style={{ color: "red" }} className={"fa fa-trash font-weight-bold"}></i>
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