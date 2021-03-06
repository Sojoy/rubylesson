import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Video from '../components/Assets/Table/Video';
import Navbar from '../components/Assets/Navbar'

class Episode extends React.Component {
    constructor(props) {
        super(props)
        this.state = { episode: {} }
        this.addHtmlEntities = this.addHtmlEntities.bind(this)
        this.deleteEpisode = this.deleteEpisode.bind(this)
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props

        const url = `/api/v1/show/${id}`
        axios.get(url)
        .then(response => {
            this.setState( {
                episode: response.data
            })
        })
        .catch(() => {
            throw new Error("Network response was not ok")
            this.props.history.push("/courses")}
        )
    }

    addHtmlEntities(str) {
        return String(str)
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
    }

    deleteEpisode() {
        const {
          match: {
            params: { id }
          }
        } = this.props;
        const url = `/api/v1/destroy/${id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;
    
        axios.delete(url, {
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            if (response.status == "200"){
                this.props.history.push("/episodes")
            }
          })
          .catch(error => console.log(error.message));
    }

    render() {
        const { episode } = this.state;
        let ingredientList = "No ingredients available";

        const description = this.addHtmlEntities(episode.description);

        return (
            
            <div className="">
                <Navbar />
                <div className="hero position-relative d-flex align-items-center justify-content-center">
                    <Video />
                    <div className="overlay bg-dark position-absolute" />
                </div>
                <div className="container ">
                    <h4>{episode.title}</h4>
                </div>
                <div className="container py-5">
                    <div className="row">
                    <div className="col-sm-12 col-lg-7">
                        <div
                        dangerouslySetInnerHTML={{
                            __html: `${description}`
                        }}
                        />
                        <div>
                            {episode.url}
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-5">
                        <button type="button" className="btn btn-danger" onClick={this.deleteEpisode}>
                        Delete Episode
                        </button>
                    </div>
                    </div>
                    <Link to="/episodes" className="btn btn-link">
                    Back to episodes
                    </Link>
                </div>
            </div>
        );
    }
}

export default Episode