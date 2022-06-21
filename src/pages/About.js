import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic_name.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rachael Tamakloe</div>
            <div className="brief_description">
            My name is Rachael Tamakloe. I'm a rising junior 
          at the University of Pennsylvania. I'm majoring in Systems Science Engineering
          with a concentratnpmion in Data Science and a minor in Computer Science. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
