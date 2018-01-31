import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

//functions from redux
import {
    fetchPagesIfNeeded,
    fetchSettingsIfNeeded,
} from './data/site'

//components
import Navbar from './components/Navbar'

//views
import Home from './views/Home'

class App extends Component {

    componentWillMount() {
        const { fetchPagesIfNeeded, fetchSettingsIfNeeded } = this.props;
        fetchSettingsIfNeeded();
        fetchPagesIfNeeded();
    }

    render() {
        const { settings } = this.props
        return (
            <div className="body">
                <div className="wrapper">
                    <Navbar settings={settings} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Home} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.siteReducer.isFetching,
    settings: state.siteReducer.settings,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { fetchPagesIfNeeded, fetchSettingsIfNeeded }, 
        dispatch
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
