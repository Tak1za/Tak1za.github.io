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
          backgroundColor: "#444"
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
          <p>
            An online shopping store on your fingertips. Choose from a variety
            of clothing, add them to your cart, pay for it and get it delivered.
          </p>
          <h3>Tech Stack</h3>
          <p>
            Created using <b>React</b>, with <b>Redux</b> for state management,{" "}
            <b>Redux Persist</b> to persist data on refresh, <b>Redux Logger</b>{" "}
            to analyze redux operations while development, and <b>Reselect</b>{" "}
            as a state selector library.
            <p>
              Authentication is powered by <b>Firebase</b>, and payments are
              operating using <b>Stripe</b>
            </p>
          </p>
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
