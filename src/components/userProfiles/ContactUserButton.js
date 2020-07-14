import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { deleteProject } from '../../store/actions/projectActions'; 

class ContactUserButton extends Component {
    state = {
        projectID: this.props.project.id
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deleteProject(this.state);
    }

    render() {
        const { auth, project } = this.props;

        if (auth.uid !== project.authorId) {
            return (
                <div className="container">
                    <button onClick={this.handleSubmit}>Delete</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deleteProject: (project) => dispatch(deleteProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUserButton);
