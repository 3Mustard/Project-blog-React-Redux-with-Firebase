import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Post a trade</h5>
                    <div className="input-field">
                        <label htmlFor="query">Search</label>
                        <input type="text" id="query" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
