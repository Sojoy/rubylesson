import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    padding: 10px 20px;
    color: #333 !important;
    font-size: 18px;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
`

const Item = (props) => {
    return (
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div className="card px-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Thumbnail />
                        </div>
                        <div className="col-md-8">
                            <div className="pt-4 pb-4">
                                <Link to={`/episodes/${props.id}`} className="h4">{props.title}</Link>
                                <p>{props.description}</p>
                                <div className="cta-wrapper">
                                    <Button onClick={props.handleVideoChange} className="btn cta-btn"> Watch this video</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item