import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Assets/Navbar'

class NewEpisode extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: "",
            description: "",
            url: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this)
    }

    stripHtmlEntities(str) {
        return String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const serverUrl = "/api/v1/courses/create";
        
        const { title, description, url } = this.state;

        if (title.length == 0 || description.length == 0 || url.length == 0)
            return;

        const body = {
            title,
            url,
            description: description.replace(/\n/g, "<br> <br>"),
            section_id: 5
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        axios.post(serverUrl, body, {
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            //debugger
            this.props.history.push('/courses') 
        })
        .catch(error => {
            //this.props.history.push(`/episode/${response.id}`)
            console.log(error.message)
        });
    }

    render() {
        return (
            <div>
                <Navbar />
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                  Add a new episode to our awesome Ruby tutorial collection.
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="episodeTitle">Name</label>
                    <input
                      type="text"
                      name="title"
                      id="episodeTitle"
                      className="form-control"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="episodeDescription">Description</label>
                    <textarea
                    className="form-control"
                    id="episodeDescription"
                    name="description"
                    rows="5"
                    required
                    onChange={this.onChange}
                  />
                    <small id="ingredientsHelp" className="form-text text-muted">
                      Provide details about tutorial.
                    </small>
                  </div>
                  <label htmlFor="url">Url</label>
                  <input
                    className="form-control"
                    id="url"
                    name="url"
                    required
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn btn-dark custom-button mt-3">
                    Create Episode
                  </button>
                  <Link to="/episodes" className="btn btn-link mt-3">
                    Back to episodes
                  </Link>
                </form>
              </div>
            </div>
          </div>
          </div>
        );
      }
}

export default NewEpisode