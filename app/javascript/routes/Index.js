import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseList from '../components/Courses'
import Index from '../components/Index'

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/courses" exact component={CourseList} />
        </Switch>
    </Router>
)