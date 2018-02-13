import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

//functions from redux
import {
    fetchPagesIfNeeded,
    fetchSettingsIfNeeded,
} from './data/site'

//components
import Sidebar from './components/Sidebar'
import Main from './components/Main'

//views
import Home from './views/Home'

class App extends Component {

    componentWillMount() {
        const { fetchPagesIfNeeded, fetchSettingsIfNeeded } = this.props;
        fetchSettingsIfNeeded();
        fetchPagesIfNeeded();
    }

    render() {
        const { isFetching, settings, pages } = this.props
        return (
            <div className="wrapper">
                <Sidebar title={settings.title} />
                <Main page='about' fetching={isFetching} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.siteReducer.isFetching,
    settings: state.siteReducer.settings,
    pages: state.siteReducer.pages,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { fetchPagesIfNeeded, fetchSettingsIfNeeded }, 
        dispatch
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
