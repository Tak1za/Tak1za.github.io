import React from "react";
import "./RepositoryDetails.scss";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import showdown from "showdown";
import parse from "html-react-parser";

const convertToHTML = (data) => {
  let converter = new showdown.Converter();
  return parse(converter.makeHtml(data));
};

function RepositoryDetails(props) {
  const { openDetails, handleCloseDetails, repo } = props;
  return (
    <Dialog
      open={openDetails}
      onClose={handleCloseDetails}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      PaperProps={{
        style: {
          backgroundColor: "#444",
        },
      }}
    >
      <DialogTitle id="scroll-dialog-title">
        <div>{repo.title}</div>
        <Button
          variant="outlined"
          size="small"
          target="_blank"
          href={repo.url}
          endIcon={
            repo.title === "Honeywell Forge" ? <HomeIcon /> : <GitHubIcon />
          }
          color="inherit"
        >
          {repo.title === "Honeywell Forge" ? "Website" : "Github"}
        </Button>
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
          component="span"
        >
          {convertToHTML(repo.data.desc)}
          {repo.isStack ? (
            <div>
              <h3>Tech Stack</h3>
              <div>{convertToHTML(repo.data.stack)}</div>
            </div>
          ) : null}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="DialogActions">
        {repo.tags.map((tag) => {
          return (
            <Avatar
              key={tag}
              src={`${process.env.PUBLIC_URL}/assets/${tag.toLowerCase()}.svg`}
              alt={tag}
              className="Avatar"
            />
          );
        })}
      </DialogActions>
    </Dialog>
  );
}

export default RepositoryDetails;
