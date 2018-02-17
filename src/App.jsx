import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

//functions from redux
import {
    fetchPagesIfNeeded,
    fetchSettingsIfNeeded,
} from './data/site'

//components
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Contact from './components/Contact';

//views
const About = (props) => (<Main page={'about'} />)
const Work = (props) => (<Main page={'our-process'} />)

class App extends Component {

    componentWillMount() {
        const { fetchPagesIfNeeded, fetchSettingsIfNeeded } = this.props;
        fetchSettingsIfNeeded();
        fetchPagesIfNeeded();
    }

    render() {
        const { settings } = this.props
        return (
            <div className="wrapper">
                <Sidebar title={settings.title} />
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/work' component={Work} />
                    <Route path='/contact' component={Contact} />
                    <Route exact path='/' component={About} />
                </Switch>
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
