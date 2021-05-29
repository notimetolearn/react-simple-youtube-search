import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, selectedVideo}) => {

    const renderedVideos = videos.map(video => {
        return (           
            <VideoItem key={video.id.videoId} 
                video={video} 
                selectedVideo={selectedVideo}/>            
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