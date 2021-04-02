import React, { useState } from "react";
import "./Repository.scss";
import RepositoryDetails from "../RepositoryDetails/RepositoryDetails";

function Repository(props) {
  const { repo } = props;

  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  return (
    <div className="RepositoryContainer">
      <div
        className="Repository"
        onClick={handleOpenDetails}
      >{`(${repo.title.toUpperCase()})`}</div>
      <RepositoryDetails
        openDetails={openDetails}
        handleCloseDetails={handleCloseDetails}
        repo={repo}
      />
    </div>
  );
}

export default Repository;
