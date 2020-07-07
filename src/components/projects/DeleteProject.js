import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteProject } from '../../store/actions/projectActions'; //make action

class DeleteProject extends Component {
    state = {
        projectID: this.props.project.id
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deleteProject(this.state);
        this.props.history.push("/");
    }

    render() {
        console.log(this.props)
        const { auth, project } = this.props;
        if (!auth.uid) return <Redirect to='signin'/>

        if (auth.uid !== project.authorId) {
            return null; 
        } else {
            return (
                <div className="container">
                    delete button
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (project) => dispatch(deleteProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProject);
