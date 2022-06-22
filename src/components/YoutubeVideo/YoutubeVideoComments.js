import React, { useState } from "react";

const YoutubeVideoComments = ({
    video,
    comments,
    addVideoComment,
    addVideoLikes,
    addVideoDislikes,
}) => {
    const [comment, setComment] = useState("");

    return (
        <div className="ui fluid container comments">
            <h3 className="ui inverted dividing header">Post a Comment</h3>
            <form className="ui reply form">
                <div className="field">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <div
                    className="ui red labeled submit icon button"
                    onClick={() => {
                        addVideoComment(video.id.videoId, comment);
                        setComment("");
                    }}
                >
                    <i className="icon edit"></i> Add Comment
                </div>
            </form>
            {comments.map((comment) =>
                comment.video === video.id.videoId ? (
                    <div className="comment bb" key={comment.text.id}>
                        <div className="content">
                            <i class="user circle outline icon large"></i>
                            <div className="text c-w-color">{comment.text.comment}</div>
                            <div className="ui left floated container mb">
                                <i
                                    className="thumbs up outline icon"
                                    onClick={() => {
                                        addVideoLikes(comment.video, comment.text.id);
                                    }}
                                ></i>
                                <span className="mr-1">{comment.text.likes}</span>
                                <i
                                    className="thumbs down outline icon"
                                    onClick={() => {
                                        addVideoDislikes(comment.video, comment.text.id);
                                    }}
                                ></i>
                                <span>{comment.text.dislikes}</span>
                            </div>
                        </div>
                    </div>
                ) : null
            ).reverse()}
        </div>
    );
};

export default YoutubeVideoComments;
