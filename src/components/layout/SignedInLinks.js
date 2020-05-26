import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    console.log(props);
    return (
        <ul className="right">
            <li><NavLink to='/new/project'>new project</NavLink></li>
            <li><a onClick={props.signOut}>Sign out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CC</NavLink></li>
        </ul>  
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
