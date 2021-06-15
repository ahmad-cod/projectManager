import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedOutLinks = (props) => {
    console.log(props)
    return (
        <ul className="right">
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks