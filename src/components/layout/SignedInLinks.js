import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/new/project'>New Post</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
                {props.profile.initials}
            </NavLink></li>
        </ul>  
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);


//the nav link for a users profile requires this to be setup to the store to get the auth.uid needed to get to a users profile.