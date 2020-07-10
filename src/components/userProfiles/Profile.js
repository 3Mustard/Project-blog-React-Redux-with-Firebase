//mimick project details component structure in reguards to using a url for finding a user instead of a project.
//this component also needs to use the url of the users id to get all projects that they have made.

import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const Profile = (props) => {
  const { project, auth, user } = props;
  if (!auth.uid && (auth.uid !== user.id)) return <Redirect to='/signin'/>

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
    user: state.firestore.data.user,
    auth: state.firebase.auth
  };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
      return [
        {user: 'users', doc: props.match.params.id, storeAs: 'user'},
      ];
    }),
)(Profile);
