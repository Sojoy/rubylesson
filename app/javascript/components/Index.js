import React, { Component } from 'react'
import Jumbotron from './Assets/Jumbotron'
import Navbar from '../components/Assets/Navbar'

class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
            </div>
        )
    }
}

export default Index
