import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = (props) => {
    const { auth, profile } = props; 
    console.log(props.user)
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <nav className="nav-wrapper grey darken-3 navbar">
            <div className="container">
                <Link to='/' className="brand-logo">Let's Trade!</Link>
                { auth.isLoaded && links }
            </div>
        </nav>   
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        user: state.firebase
    }
}

export default connect(mapStateToProps)(NavBar);
