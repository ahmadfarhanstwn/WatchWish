import React from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { useStyles } from "../Hooks/useStyles";

export const DescriptionPage = ({ open, handleClose, movieDetails }) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.imageTitle}>
            <div className={classes.detailItem}>
              <img
                className={classes.detailPoster}
                src={movieDetails.Poster}
                alt=""
              />
            </div>
            <div>
              <h2 id="transition-modal-title">{movieDetails.Title}</h2>
              <div className={classes.detailRating}>
                <p className={classes.detailItem}>{movieDetails.Year}</p>
                <p className={classes.detailItem}>{movieDetails.Rated}</p>
                <p className={classes.detailItem}>{movieDetails.Runtime}</p>
              </div>
              <p id="transition-modal-description">{movieDetails.Plot}</p>
            </div>
          </div>
          <div className={classes.advanceDetails}>
            <hr />
            <p>
              Actors : <span>{movieDetails.Actors}</span>
            </p>
            <hr />
            <p>Director : {movieDetails.Director}</p>
            <hr />
            <p>Genre : {movieDetails.Genre}</p>
            <hr />
            <p>Type : {movieDetails.Type}</p>
            <hr />
            <p>Country : {movieDetails.Country}</p>
            <hr />
            <p>IMDb Rating : {movieDetails.imdbRating}</p>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
