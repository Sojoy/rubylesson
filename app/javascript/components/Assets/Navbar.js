import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Navbar extends Component {
    constructor(props){
        super()
    }

    Logout(event) {
        event.preventDefault();
        const serverUrl = "/logout"

        const token = document.querySelector('meta[name="csrf-token"]').content;
        Axios.delete(serverUrl)
        .then(response => {
            console.log(response)
            if (response.status == 200) {
                //console.log(response)
                //this.props.history.push('/login')
                alert("logged out")
                //clear localstorage
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Ruby Player</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/logout" onClick={this.Logout}>Logout</Link></li>
                    </ul>
                </div>
                </nav>
        )
    }
}

export default Navbar