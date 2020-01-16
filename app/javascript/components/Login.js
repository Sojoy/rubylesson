import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Assets/Navbar'

class Login extends Component {
    constructor(props) {
        super()

        this.state = {
            email: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onRegister = this.onRegister.bind(this)
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onRegister(event) {
        event.preventDefault();
        const serverUrl = "/sessions"
        const { email, password } = this.state

        if (email.length == 0 || password.length == 0) {
            return
        }

        const body = {
            user: {
                email,
                password
            }
        }

        const token = document.querySelector('meta[name="csrf-token"]').content;
        Axios.post(serverUrl, body, {
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.status == 200) {
                //console.log(response)
                this.props.history.push('/episodes')
            }
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <div>
            <Navbar />
            <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Login
                </h1>
                <form onSubmit={this.onRegister}>
                  <div className="form-group">
                    <label htmlFor="episodeTitle">Name</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <label htmlFor="url">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn btn-dark custom-button mt-3">
                    Login
                  </button>
                  <Link to="/episodes" className="btn btn-link mt-3">
                    Back to episodes
                  </Link>
                </form>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Login