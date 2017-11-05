'use strict'

import 'semantic-ui/semantic.min.css!'
import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link } from 'react-router'
import { BrowserRouter as Router, StaticRouter, Route, Link } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
// import createHashHistory from 'history/createHashHistory'

// const history = createHistory()

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item">电视</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

class TV extends React.Component {
    render() {
        return (
            <div>
                <div className="ui info message">电视节目列表</div>
            </div>
        )
    }
}

class Show extends React.Component {
    render() {
        return (
            <h3>节目</h3>
        )
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="tv" component={TV}>
                <Route path="shows/:id" component={Show} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))
// ReactDOM.render((
//     <BrowserRouter basename="/my">
//         <App />
//     </BrowserRouter>
// ), document.getElementById('app'))