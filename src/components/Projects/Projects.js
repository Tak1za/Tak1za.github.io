import React, { useState, useEffect } from "react";
import "./Projects.scss";
import Repository from "../Repository/Repository";

function Projects() {
  const getData = () => {
    fetch(`${process.env.PUBLIC_URL}/data/repositories.json`)
      .then((res) => res.json())
      .then((data) => {
        setRepositories(data);
      });
  };

  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Projects">
      {repositories &&
        repositories.length > 0 &&
        repositories.map((repo) => {
          return <Repository repo={repo} className="Repository" />;
        })}
    </div>
  );
}

export default Projects;
