import React, { useRef, useState, useEffect } from "react";
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

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (openDetails) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDetails]);

  return (
    <div className="RepositoryContainer">
      <div
        className="Repository"
        onClick={handleOpenDetails}
      >{`(${repo.title.toUpperCase()})`}</div>
      <RepositoryDetails
        openDetails={openDetails}
        handleCloseDetails={handleCloseDetails}
        descriptionElementRef={descriptionElementRef}
        repo={repo}
      />
    </div>
  );
}

export default Repository;
