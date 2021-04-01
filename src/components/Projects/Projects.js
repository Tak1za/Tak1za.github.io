import React, { useState, useEffect } from "react";
import "./Projects.scss";
import Link from "@material-ui/core/Link";

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
        repositories.map((repo) => (
          <div key={repo.id}>
            <Link
              className="Repository"
              target="_blank"
              href={repo.url}
              color="inherit"
              rel="noreferrer"
            >
              ({repo.title.toUpperCase()})
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Projects;
