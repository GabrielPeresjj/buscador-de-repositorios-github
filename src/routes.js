import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Repositorios from './pages/Repositorios/'
import Home from './pages/Home'


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositorios' component={Repositorios} />
            </Switch>
        </Router>
    )
}

export default Routes