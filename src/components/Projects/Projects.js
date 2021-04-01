import React, { useState, useEffect } from "react";
import './Projects.scss';
import jsonData from "../../data/repositories.json";

function Projects() {
  const getData = () => {
    var data = JSON.parse(JSON.stringify(jsonData));
    console.log(data);
    setRepositories(data);
  };

  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Projects">
      {repositories &&
        repositories.length > 0 &&
        repositories.map((repo) => <div key={repo.id}>({repo.title.toUpperCase()})</div>)}
    </div>
  );
}

export default Projects;
