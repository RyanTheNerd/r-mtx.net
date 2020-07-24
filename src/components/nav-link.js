import React from "react";

export default function NavLink(props) {
    return (
        <div className="navbar-item">
            <a href={props.href} className="nav-link" style={{"color": "white"}}>{props.title}</a>
        </div>
    )
}