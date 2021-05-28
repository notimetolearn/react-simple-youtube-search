import React from 'react';
import Youtube from '../api/Youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {

    state = {videos: []};

    onSearchSubmit = async (term) => {        
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items});
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;