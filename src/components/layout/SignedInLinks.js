import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New something</NavLink></li>
            <li><NavLink to='/'>log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CC</NavLink></li>
        </ul>  
    )
}

export default SignedInLinks;