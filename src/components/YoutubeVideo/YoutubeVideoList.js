import React from "react";

const YoutubeVideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video, index) => {
        return (
            <div className="item video-list-component" key={index} onClick={() => onVideoSelect(video)}>
                <div className="image">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} 
                    />
                </div>
                <div className="content">
                    <div className="header mb-1">{video.snippet.title}</div>
                    <div className="meta f-w-color mb-custom">{video.snippet.channelTitle}</div>
                    <div className="extra f-w-color ">
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        )
    });

    return <div className="ui inverted divided list relaxed mt-1">{renderedList}</div>;
}

export default YoutubeVideoList;