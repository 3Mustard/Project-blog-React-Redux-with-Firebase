//mimick project details component structure in reguards to using a url for finding a user instead of a project.
//this component also needs to use the url of the users id to get all projects that they have made.

import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import ProjectList from '../projects/ProjectList';

const Profile = (props) => {
  const { auth, user, userProjects } = props;
  if (!auth.uid) return <Redirect to='/signin'/>
  console.log(userProjects);
  if (user) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">profile stuff</span>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <ProjectList projects={userProjects} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>loading profile...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.firestore.data.user,
    userProjects: state.firestore.ordered.userProjects,
    auth: state.firebase.auth
  };
};

export default compose(
    firestoreConnect((props) => {
      return [
        {collection: 'users', doc: props.match.params.id, storeAs: 'user'},
        {collection: 'projects', where: ["authorId", "==", `${props.match.params.id}`], storeAs: 'userProjects'},
      ];
    }),
    connect(mapStateToProps)
)(Profile);
