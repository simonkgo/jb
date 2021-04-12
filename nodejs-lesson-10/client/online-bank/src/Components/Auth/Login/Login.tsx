import React from 'react'
import {Link} from "react-router-dom"

export const Login = () => {
    return (
        <div>
            <h3>Log In</h3>
            <Link to="/register">Create New Account</Link>
        </div>
    );
};
