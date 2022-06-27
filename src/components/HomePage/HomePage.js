import React from "react";
import YoutubeHomeVideos from "../YoutubeVideo/YoutubeHomeVideos";

import SideBar from "./SideBar/SideBar";

const HomePage = ({ videos, onVideoSelect }) => {
    return (
        <div className="ui two column grid">
            <SideBar />
            <YoutubeHomeVideos videos={videos} onVideoSelect={onVideoSelect}/>
        </div>
    )
}

export default HomePage;