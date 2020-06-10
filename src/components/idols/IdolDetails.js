import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const IdolDetails = (props) => {

  const { idol, auth } = props;
  if (!auth.uid) return <Redirect to='/signin'/>

  if (idol) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ idol.stageName }</span>
            <p>birth name: { idol.birthName }</p>
            <p>{ idol.englishName ? `english name ${idol.englishName}` : null }</p>
            <p>birthplace: { idol.birthplace }</p>
            <p>birthday: {idol.birthday }</p>
            <div>
                <p>{ idol.position.length > 1 ? "positions" : "position" }</p>
                { idol.position.map(pos => {
                    return <p>{pos}</p>
                })}
            </div>
            <p>star sign {idol.starSign}</p>
            <p>blood type {idol.bloodType}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by</div>
            <div className="grey-text">time</div>
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
    idol: state.firestore.data.idol,
    auth: state.firebase.auth
  };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
      return [
        {collection: 'idols', doc: props.match.params.id, storeAs: 'idol'},
      ];
    }),
)(IdolDetails);
