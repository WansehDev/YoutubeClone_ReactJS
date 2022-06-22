import React from "react";
import VideoComments from "./YoutubeVideoComments";
import MainLogo from "../assets/imgs/main-logo.png";

const YoutubeVideoItem = ({
    video,
    comments,
    addVideoComment,
    addVideoLikes,
    addVideoDislikes,
}) => {
    // play video using iframe if video found
    return (
        <div className="ui inverted container p-1 left aligned">
            <div className="ui embed">
                <iframe
                    className="yt-video"
                    title={video.snippet.title}
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="1"
                    allowFullScreen
                />
            </div>
            <div className="content mt-1">
                <div className="header vid-title mb">{video.snippet.title}</div>
                <div className="description f-w-color">{video.snippet.description}</div>
            </div>
            <VideoComments
                video={video}
                comments={comments}
                addVideoComment={addVideoComment}
                addVideoLikes={addVideoLikes}
                addVideoDislikes={addVideoDislikes}
            />
        </div>
    );
};

export default YoutubeVideoItem;
