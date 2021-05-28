import React from 'react';

const VideoList = ({videos}) => {

    const renderedVideos = videos.map(video => {
        return (
            <div className="video-item item">
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
    })

    return (
        <div className="five wide column">
            <div className="ui aligned divided list">
                {renderedVideos}
            </div>
        </div>
    );
};

export default VideoList;