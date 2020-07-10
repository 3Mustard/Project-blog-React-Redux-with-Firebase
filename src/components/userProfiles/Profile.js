import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  const { auth, user } = props;
  if (!auth.uid) return <Redirect to='/signin'/>

  if (user) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">profile stuff</span>
          </div>
          <div className="card-action grey lighten-4 grey-text">
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
    auth: state.firebase.auth
  };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
      return [
        {user: 'users', doc: state.firebase.auth.uid, storeAs: 'user'},
      ];
    }),
)(Profile);
