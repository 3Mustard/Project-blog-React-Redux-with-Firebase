import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: '',
        results: null
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    search = (query) => {

    }

    render() {
        const { projects } = this.props;
        console.log(projects)
        if ( this.state.results === null ) {
            return (
                <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Search</h5>
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
        } else {
            return (
                <div>
                    <p>{this.state.results}</p>
                </div>
            )
        }
    }
}

export default SearchBar;
