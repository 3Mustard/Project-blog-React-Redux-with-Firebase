import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='signin'/>

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div className="grey-text">2nd September</div>
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
    connect(mapStateToProps),
    firestoreConnect((props) => {
      return [
        {collection: 'projects', doc: props.match.params.id, storeAs: 'project'},
      ];
    }),
)(ProjectDetails);
