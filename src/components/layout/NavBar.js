import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavBar = (props) => {
    const { auth, profile } = props; 
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3 navbar">
            <div className="container">
                <Link to='/' className="brand-logo">트와이스</Link>
                { auth.isLoaded && links }
            </div>
        </nav>   
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);
