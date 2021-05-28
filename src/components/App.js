import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
        // use the above search term to search against youtube api
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;