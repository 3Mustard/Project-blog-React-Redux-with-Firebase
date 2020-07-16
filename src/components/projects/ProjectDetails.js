import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import DeleteOrContactProject from './DeleteOrContactProject';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin'/>

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.idol }</span>
            <p>{ project.group }</p>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>loading project...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.firestore.data.project,
    auth: state.firebase.auth
  };
};

export default compose(
    firestoreConnect((props) => {
      return [
        {collection: 'projects', doc: props.match.params.id, storeAs: 'project'},
      ];
    }),
    connect(mapStateToProps)
)(ProjectDetails);
