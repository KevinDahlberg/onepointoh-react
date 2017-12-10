import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

//views
import Home from './views/Home'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: [],
            posts: []
        }
    }

    render() {

        const renderMergedProps = (component, ...rest) => {
            const finalProps = Object.assign({}, ...rest);
            return (
            React.createElement(component, finalProps)
            );
        }
        
        const PropsRoute = ({ component, ...rest }) => {
            return (
            <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}/>
            );
        }

        if (!this.state.pages.length === 0 && !this.state.posts.length === 0){
            return (
                <div className="placeholder" />
            )
        } else {
            return (
                <Router>
                    <div className="body">
                        <div className="wrapper">
                            <Navbar />
                            <Switch>
                                <PropsRoute path='/home' component={Home} {...this.state} />
                                <PropsRoute path='/' component={Home} {...this.state} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            )
        }
    }
}