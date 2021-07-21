import React from "react";
import { MovieList } from "../Components/MovieList";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export const SearchPage = ({
  movies,
  addWishlist,
  clickDetails,
  openSnackbarAdd,
  setOpenSnackbarAdd,
}) => {
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList
          movies={movies}
          addWishlist={addWishlist}
          clickDetails={clickDetails}
        />
      </div>
      <Snackbar
        open={openSnackbarAdd}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbarAdd(false)}
      >
        <Alert severity="success">Added to watchwish!</Alert>
      </Snackbar>
    </div>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
