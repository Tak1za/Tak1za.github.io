import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import "./Profile.scss";

function Profile() {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid item sm={12} md={6}>
        <Avatar
          src={`${process.env.PUBLIC_URL}/assets/me.jpg`}
          style={{ height: "200px", width: "200px" }}
        />
        <div className="Details">
          <h1 className="Name">Varun Gupta</h1>
          <p className="DesignationAndEmail">
            Full Stack Developer | varungupta2015135@gmail.com | +91-9585426092
          </p>
          <div className="Location">
            <h2>Location</h2>
            <p>Faridabad, Haryana</p>
          </div>
          <div className="About">
            <h2>About Me</h2>
            <p>
              I'm a software developer, with experience in managing agile scrum
              teams as a scrum lead. I consider myself to be a 'forever student'
              eager to build on my foundations in the field of software
              development. I'm also a technology enthusiast and love
              experimenting with new technologies be it software or hardware.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item sm={12} md={6}>
        <div className="Experience">
          <h2>Work Experience</h2>
        </div>
      </Grid>
    </Grid>
  );
}

export default Profile;
