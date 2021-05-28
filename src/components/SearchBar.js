import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}

    onChangeInput = event => 
        this.setState({term: event.target.value});
    
    onSearchSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                 <div className="ui segment">
                    <form className="ui form" onSubmit={this.onSearchSubmit}>
                        <div className="field">
                            <label>Enter to search videos</label>
                            <input type="text" 
                            value={this.state.term}
                            onChange={this.onChangeInput}/>
                        </div>
                    </form>
                </div>
            </div>
           
        );
    }
}

export default SearchBar;