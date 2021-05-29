import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, selectedVideo}) => {
    return (
        <div className="video-item item" onClick={() => selectedVideo(video)}>
            <img
                className="ui image"
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;