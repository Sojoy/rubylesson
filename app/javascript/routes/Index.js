import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseList from '../components/Courses'
import Index from '../components/Index'
import Episode from '../components/Episode'
import NewEpisode from '../components/NewEpisode'

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/courses" exact component={CourseList} />
            <Route path="/episodes/:id" exact component={Episode} />
            <Route path="/episode" exact component={NewEpisode} />
        </Switch>
    </Router>
)