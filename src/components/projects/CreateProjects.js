import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        idol: '',
        group: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push("/");
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='signin'/>

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Post a trade</h5>
                    <div className="input-field">
                        <label htmlFor="idol">Idol</label>
                        <input type="text" id="idol" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="group">Group</label>
                        <input type="text" id="group" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Note</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
