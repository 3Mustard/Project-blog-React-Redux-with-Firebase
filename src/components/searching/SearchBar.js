import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';

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
        this.search(this.state.query);
    }

    search = (request) => {
        const { projects } = this.props;
        const query = request.toLowerCase();
        let results = [];

        projects.map( project => {
            const idol = project.idol.toLowerCase();
            const group = project.group.toLowerCase();
            if ( idol === query || group === query ){
                results.push(project);
            }
        });
        this.setState({
            results: results
        });
    }

    render() {
        const searchResults = this.state.results ? <ProjectList projects={this.state.results}/> : null;

        return (
            <div className="section">
                <div className="card z-0">
                    <div className="card-content">
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
                        <h3>Search Results</h3>
                        {searchResults}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
