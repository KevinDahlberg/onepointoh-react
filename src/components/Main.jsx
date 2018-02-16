import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';

import Content from './Content';

class Main extends Component {

    render() {
        const { isFetchingPages, page, pages } = this.props;
        return(
            <div className="main">
                <div className="main-background">
                    <div className="main-content">
                        {isFetchingPages ?
                            null :
                            <Content page={page} pages={pages} />
                        }
                    </div>
                </div>
                <div className="mobile-footer">
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

const mapStateToProps = state => ({
    isFetchingPages: state.siteReducer.isFetchingPages,
    pages: state.siteReducer.pages,
});

Main.propTypes = {
    page: PropTypes.string,
}

export default connect(mapStateToProps, null)(Main);