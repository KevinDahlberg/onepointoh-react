import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';

export default class Sidebar extends Component {
    render() {
        const { title } = this.props;
        return(
            <div className="sidebar">
                <div className="sidebar-title">
                    <h2>One.Point.Oh</h2>
                </div>
                <div className="sidebar-content">
                    <NavLink className="sidebar-link" to="/about">.about</NavLink>
                    <NavLink className="sidebar-link" to="/work">.work</NavLink>
                    <NavLink className="sidebar-link" to="/contact">.contact</NavLink>
                </div>
                <div className="sidebar-footer">
                    <div className="sidebar-icons">
                        <ul>
                            <ol><FaFacebook /></ol>
                            <ol><FaInstagram /></ol>
                            <ol><FaTwitter /></ol>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Sidebar.propTypes = {
    title: PropTypes.string,
}