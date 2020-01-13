import React, { Component } from 'react'
import Table from './Assets/Table/Table'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Assets/Navbar'

class Courses extends Component {
    constructor(){
        super()

        this.state = {
            /*course_modules: [
                { id: 1, title: '1. Ruby on rails', description: 'lorem ipsum', active: false},
                { id: 2, title: '2. Adding React to an Existing Rails app', description: 'lorem ipsum', active: false},
                { id: 3, title: '3. Building a Hello World App', description: 'lorem ipsum', active: false},
                { id: 4, title: '4. Adding React Router Dom to your App', description: 'lorem ipsum', active: false}
            ]*/
            course_modules: []
        }
    }

    componentDidMount(){
        axios.get('episodes.json')
        .then(data => {
            let res = []
            data.data.data.map( (data) => {
                res.push({id: data.id, title: data.title, description: data.description, active: false})
                this.setState({course_modules: res})
            })
            //debugger
        })
        .catch(data => {
            console.log(data)
            //debugger
        })
    }
    handleVideoChange(item, event){
        event.preventDefault()

        //debugger

        let course_modules = [...this.state.course_modules]
        course_modules.map( data => {
            data.active = false
        })

        item.active = !item.active

        //course_modules[item.id - 1] = item
        this.setState({course_modules})
    }

    render() {
        const newEpisode = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
              <h4>
                <Link to="/episode" className="btn btn-lg btn-dark">Add a video tutorial</Link>
              </h4>
            </div>
        )
        return (
            <div>
                <Navbar />
                <div className="row">
                    { newEpisode }
                </div>
                <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules} />
            </div>
        )
    }
}

export default Courses