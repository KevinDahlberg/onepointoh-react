import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => (
    <div className = "navbar">
        <div className = "navbar-content-left">
            <NavLink to="/">{props.settings.title}</NavLink>
        </div>
        <div className = "navbar-content-right">
            <NavLink to="/about">About</NavLink>
        </div>
    </div>
)

export default Navbar