import React from 'react';

const VideoDetail = ({video}) => {   

    if(!video) {
        return <div>Loading...</div>
    }

    const VIDEO_SRC = `https://www.youtube.com/embed/${video.id.videoId}`;

    return ( 
        <div className="eleven wide column">
            <div className="ui embed">
                <iframe src={VIDEO_SRC} title={video.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;