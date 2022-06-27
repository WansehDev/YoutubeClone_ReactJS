import React from "react";

const YoutubeHomeVideos = ({ videos, onVideoSelect }) => {
    //create a grid of videos
    const renderedGrid = videos.map((video, index) => {
        return (
            <div className="doubling four wide column">
                <div className="item video-list-component" key={index} onClick={() => onVideoSelect(video)} style={{ height: "250px"}} >
                    <div className="image">
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} 
                        width={250}
                        />
                    </div>
                    <div className="content">
                        <div className="header mb-1 invert-color">{video.snippet.title}</div>
                        <div className="meta f-w-color mb-custom">{video.snippet.channelTitle}</div>
                        {/* <div className="extra f-w-color ">
                        <p>{video.snippet.description}</p>
                    </div> */}
                    </div>
                </div>
            </div>
        )
    });

    if (!onVideoSelect) {
        
    }

    return (
        <div className="ui inverted stackable grid doubling twelve wide column">
            {renderedGrid}
        </div>
    )
}

export default YoutubeHomeVideos;