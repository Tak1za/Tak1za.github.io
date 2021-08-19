import {
  Avatar,
  Chip,
  Fab,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Profile.scss";
import showdown from "showdown";
import parse from "html-react-parser";
import { EmailRounded, LinkedIn, Twitter, WhatsApp } from "@material-ui/icons";

function getExperience() {
  return ["Honeywell", "Honeywell", "Honeywell", "Aricent Technologies"];
}

function getExperienceContent(step) {
  switch (step) {
    case 0:
      return `- Granted promotion to Software Engineer II after glorious 2 years, work profile inclining towards system design\n- Recevied bravo award for creating an application that helps track variable mappings across deployment environments`;
    case 1:
      return `- Contributed on Honeywell Forge by working on technologies like **Neo4j** and **Elasticsearch**\n- Leveraged **Redis** as a cache\n- Trained colleagues on taking up **Go** and developed a vital component on the same\n- Contributed heavily on increasing the performance of the APIs\n- Gained experience on managing scrum teams by acting as a scrum lead`;
    case 2:
      return `- Created a POC to create an indoor navigation system using WiFi routers placed inside\n- Created a POC for an extensible object model leveraging **Neo4j** and **Elasticsearch**\n- Worked on **Open Policy Agent** to implement RBAC for internal offerings\n- Participated in a Hackathon to create an automated Vehicle Management System, leading to a job offer`;
    case 3:
      return `- Created automation scripts to test the **SIP(session Initiation Protocol) Stack**\n- Used **Selenium** and Excel macros to automate a manual ticket creation process\n- Made myself familiar with **Linux**, partly working as a system admin`;
    default:
      return;
  }
}

function getExperienceTime(step) {
  switch (step) {
    case 0:
      return `August, 2021 - Present`
    case 1:
      return `July, 2019 - July, 2021`;
    case 2:
      return `February, 2019 - June, 2019`;
    case 3:
      return `May, 2018 - June, 2018`;
    default:
      return;
  }
}

function getExperienceRole(step) {
  switch (step) {
    case 0:
      return `Software Engineer II`;
    case 1:
      return `Software Engineer I`;
    case 2:
      return `Intern Bachelor`;
    case 3:
      return `Software Intern`;
    default:
      return;
  }
}

function getExpertise() {
  return [
    "Go",
    "Dotnet",
    "React",
    "Linux",
    "Javascript",
    "Neo4j",
    "Elasticsearch",
    "Flutter",
    "Firebase",
  ];
}

const convertToHTML = (data) => {
  let converter = new showdown.Converter();
  return parse(converter.makeHtml(data));
};

function Profile() {
  const [activeStep, setActiveStep] = useState(0);
  const experience = getExperience();
  const expertise = getExpertise();

  const handleSelectStep = (index) => {
    setActiveStep(index);
  };

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
          <h2 className="Name">Varun Gupta</h2>
          <p className="DesignationAndEmail">
            Full Stack Developer | varungupta2015135@gmail.com | +91-9585426092
          </p>
          <div className="Location">
            <h3>Location</h3>
            <p>Faridabad, Haryana</p>
          </div>
          <div className="About">
            <h3>About Me</h3>
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
          <h3>Work Experience</h3>
          <Stepper activeStep={activeStep} orientation="vertical">
            {experience.map((label, index) => (
              <Step key={index} onClick={() => handleSelectStep(index)}>
                <StepLabel onClick={() => handleSelectStep(index)}>
                  {label} | {getExperienceRole(index)} |{" "}
                  {getExperienceTime(index)}
                </StepLabel>
                <StepContent>
                  {convertToHTML(getExperienceContent(index))}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="Expertise">
          <h3>Areas of Expertise</h3>
          <div className="ExpertiseChipsContainer">
            {expertise.map((label) => (
              <Chip
                key={label}
                label={label === "Dotnet" ? ".NET" : label}
                style={{ color: "black" }}
                avatar={
                  <Avatar
                    src={`${
                      process.env.PUBLIC_URL
                    }/assets/${label.toLowerCase()}.svg`}
                    alt={label}
                  />
                }
              ></Chip>
            ))}
          </div>
        </div>
      </Grid>
      <Grid
        item
        lg={12}
        justify="center"
        direction="row"
        alignItems="center"
        container
        className="PostScript"
        wrap="wrap"
      >
        Have a project idea or want to work with me?
      </Grid>
      <Grid
        item
        justify="center"
        direction="row"
        alignItems="center"
        container
        className="PostScript"
        wrap="wrap"
      >
        <Fab
          color="primary"
          aria-label="mail"
          size="small"
          href="mailto:varungupta2015135@gmail.com"
          target="_blank"
        >
          <EmailRounded />
        </Fab>
        <Fab
          color="primary"
          aria-label="mail"
          size="small"
          href="https://wa.me/919585426092"
          target="_blank"
        >
          <WhatsApp />
        </Fab>
        <Fab
          color="primary"
          aria-label="mail"
          size="small"
          href="https://www.linkedin.com/in/varun-gupta-894baa118/"
          target="_blank"
        >
          <LinkedIn />
        </Fab>
        <Fab
          color="primary"
          aria-label="mail"
          size="small"
          href="https://twitter.com/Tak1za"
          target="_blank"
        >
          <Twitter />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default Profile;
