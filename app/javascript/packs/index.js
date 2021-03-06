// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
//import CourseList from '../components/Courses/Courses'
import App from '../components/App'

const Hello = props => <div>Hello {props.name}!</div>;

// import PropTypes from "prop-types";
/*Hello.defaultProps = {
  name: "David"
};

Hello.propTypes = {
  name: PropTypes.string
};*/

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />, //<CourseList />
    document.body.appendChild(document.createElement("div"))
  );
});
