import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 100px 0;
    color: #fff;
`

const Header = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 48px;
    line-height:52px;
`

const Subhead = styled.p`
    font-size:18px;
    font-weight:500;
`

const Button = styled(Link)`
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

const Jumbotron = () => {
    return (
        <Section className="home-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>React for Rails Developers</Header>
                            <Subhead>Supercharge your Ruby on Rails Apps with react.js</Subhead>
                            <div className="cta-wrapper">
                                <Button to="/episodes" className="btn btn-lg custom-button">
                                    See available episodes
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/5F_JUvPq410" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Jumbotron