import React, { Component } from "react";
import "./assets/stylesheets/style.css";


// api
import youtube from "../api/youtube";

// Components
import Header from "./Header/Header";
import VideoList from "./YoutubeVideo/YoutubeVideoList";
import VideoItem from "./YoutubeVideo/YoutubeVideoItem";
import Home from "./HomePage/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      search: "",
      comments: [
        {
          video: "",
          text: { id: "", comment: "", likes: 0, dislikes: 0 },
        },
      ],
    };
  }

  // generate Random ID for comments
  generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  addVideoComment = (videoId, comment) => {
    const comments = this.state.comments;
    const newCommentID = this.generateId();
    comments.push({
      video: videoId,
      text: { id: newCommentID, comment: comment, likes: 0, dislikes: 0 },
    });
    this.setState({ comments });
  };

  findCommentIndexInVideo = (videoId, commentID) => {
    const comments = this.state.comments;
    // find the comment that matches the video id and comment id
    const comment = comments.find((comment) => {
      return comment.video === videoId && comment.text.id === commentID;
    });
    return comment;
  };

  addVideoLikes = (videoId, commentID) => {
    let comment = this.findCommentIndexInVideo(videoId, commentID);
    comment.text.likes++;
    this.setState({ comments: this.state.comments });
  };

  addVideoDislikes = (videoId, commentID) => {
    let comment = this.findCommentIndexInVideo(videoId, commentID);
    comment.text.dislikes++;
    this.setState({ comments: this.state.comments });
  };

  handleSubmit = async (e) => {
    const video = this.state.search;
    const response = await youtube.get("/search", {
      params: {
        q: video,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleYoutubeVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  handleOnChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSelectLogo = () => {
    this.setState({
      selectedVideo: null,
    });
  }

  componentDidMount = async () => {
    // get random videos from the api
    const response = await youtube.get("/search", {
      params: {
        q: "",
      },
    })

    this.setState({
      videos: response.data.items,
    });
  }

  render() {
    return (
      <div className="ui bg-color" >
        <Header
          handleOnChangeSearch={this.handleOnChangeSearch}
          handleSubmit={this.handleSubmit}
          handleSelectLogo={this.handleSelectLogo}
        />
        {this.state.selectedVideo ? (
          <div className="ui stackable grid">
            <div className="black nine wide column right aligned">
              <VideoItem
                video={this.state.selectedVideo}
                comments={this.state.comments}
                addVideoComment={this.addVideoComment}
                addVideoLikes={this.addVideoLikes}
                addVideoDislikes={this.addVideoDislikes}
              />
            </div>
            <div className="black seven wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.handleYoutubeVideoSelect}
              />
            </div>
          </div>
        ) : (
          <Home videos={this.state.videos} onVideoSelect={this.handleYoutubeVideoSelect}/>
        )
        }
      </div >
    );
  }
}

export default App;
