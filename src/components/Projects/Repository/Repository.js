import React from "react";
import { Avatar } from "@material-ui/core";
import "./Repository.scss";

function Repository(props) {
  const { repo } = props;
  return (
    <div className="RepositoryContainer">
      <div
        className="Repository"
        target="_blank"
        href={repo.url}
        color="inherit"
        rel="noreferrer"
      >
        {`${repo.title.toUpperCase()}`}
      </div>
      {repo.tags.map((tag) => {
        return (
          <Avatar
            src={`${process.env.PUBLIC_URL}/data/${tag.toLowerCase()}.svg`}
            alt={tag}
            className="Avatar"
          />
        );
      })}
    </div>
  );
}

export default Repository;
