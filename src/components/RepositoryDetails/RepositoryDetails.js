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
          endIcon={<GitHubIcon />}
          color="inherit"
        >
          Github
        </Button>
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <p>{convertToHTML(repo.data.desc)}</p>
          {repo.isStack ? (
            <>
              <h3>Tech Stack</h3>
              <p>{convertToHTML(repo.data.stack)}</p>
            </>
          ) : null}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="DialogActions">
        {repo.tags.map((tag) => {
          return (
            <Avatar
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
