import React from 'react'

const Navbar = (props) => (
    <div className = "navbar">
        <div className = "navbar-content-left">
            <span>{props.settings.title}</span>
        </div>
        <div className = "navbar-content-right">
            <span>About</span>
        </div>
    </div>
)

export default Navbar