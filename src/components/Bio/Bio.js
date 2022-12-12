// see stuff about a friend + friend group
// pictures, media , text about them. 
// also configure ( manage notifications / unfriend / unfollow )

import { R, C } from 'rectangles-npm'
import TopBar from '../shared/TopBar';
import SideBar from '../shared/SideBar';
import Identity from './Identity';
import Bulletin from './Bulletin'
import BioBottom from './BioBottom';

import PostMaker from '../Feed/PostMaker';
import { Posts } from '../Feed/Posts';
import mockWall from '../../mocks/MockWall';

function Bio({ I }) {
    return (
        <R root t bt bb br bl theme={I.theme}>
            <TopBar I={I}></TopBar>
            <R l tel>
                <SideBar I={I}></SideBar>
                <R t tel>
                    <Identity I={I}></Identity>
                    <Bulletin I={I} ></Bulletin>
                    <BioBottom I={I}></BioBottom>
                    <div className={`post-container ${I.theme}`} style={{
                        
                    }}>
                        <div style={{ maxWidth: "768px", margin: "auto"}}>
                            <div style={{ height: "60px" }}></div>
                            <PostMaker postI={{ editMode: false }} ></PostMaker>
                            <Posts posts={mockWall}></Posts>
                            <div style={{ height: "60px" }}></div>
                        </div>
                    </div>
                </R>
            </R>
        </R>
    );
}

export default Bio;
