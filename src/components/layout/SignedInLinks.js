import React from 'react';
import { NavLink } from 'react-router-dom'; 

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/new/project'>new project</NavLink></li>
            <li><NavLink to='/'>Sign out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CC</NavLink></li>
        </ul>  
    )
}

export default SignedInLinks;