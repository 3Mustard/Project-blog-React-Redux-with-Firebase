import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import ProjectList from '../projects/ProjectList';

const Profile = (props) => {
  const { auth, user, userProjects } = props;
  if (!auth.uid || (auth.uid !== props.match.params.id)) return <Redirect to='/signin'/> 
  console.log(userProjects);
  if (user) {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <span className="card-title">profile stuff</span>
            <p>message list component</p>
          </div>
          <div className="col s12 m5 offset-m1">
            <h3>Your posts</h3>
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
