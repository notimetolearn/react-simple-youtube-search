import React from 'react';
import Youtube from '../api/Youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    onSearchSubmit = async (term) => {        
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
                videos: response.data.items, 
                selectedVideo: response.data.items[0]
            }
        );
    }

    componentDidMount() {
        this.onSearchSubmit('react js');
    }

    onSelectedVideo = video => this.setState({selectedVideo: video});
    

    render() {
        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <VideoDetail video={this.state.selectedVideo} />                        
                        <VideoList videos={this.state.videos} selectedVideo={this.onSelectedVideo}/>                    
                    </div>      
                </div>                
            </div>
        );
    }
}

export default App;