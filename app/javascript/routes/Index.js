import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Episodes from '../components/Episodes'
import Index from '../components/Index'
import Episode from '../components/Episode'
import NewEpisode from '../components/NewEpisode'
import Register from '../components/Register'
import Login from '../components/Login'

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/episodes" exact component={Episodes} />
            <Route path="/episodes/:id" exact component={Episode} />
            <Route path="/episode" exact component={NewEpisode} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
        </Switch>
    </Router>
)