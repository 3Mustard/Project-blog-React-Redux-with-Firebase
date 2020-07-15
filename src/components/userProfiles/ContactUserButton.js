import React, { Component } from 'react';
import { connect } from 'react-redux';

const ContactUserButton = (props) => {
    const { auth, project } = props;

        if (auth.uid !== project.authorId) {
            return (
                <div className="container">
                    <button>contact this user about this trade. This button should link to sendMessage</button>
                </div>
            );
        } else {
            return null;
        }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ContactUserButton);
