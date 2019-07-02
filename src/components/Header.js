import {Link} from "react-router-dom";
import React from "react";
import "./Header.css"


export default function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}