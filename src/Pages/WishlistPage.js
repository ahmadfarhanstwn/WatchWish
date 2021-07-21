import React from "react";
import { WishlistList } from "../Components/WishlistList";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export const WishListPage = ({
  wishlist,
  removeWishlist,
  clickDetails,
  openSnackbarRemove,
  setOpenSnackbarRemove,
}) => {
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <WishlistList
          wishlist={wishlist}
          removeWishlist={removeWishlist}
          clickDetails={clickDetails}
        />
      </div>
      <Snackbar
        open={openSnackbarRemove}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbarRemove(false)}
      >
        <Alert severity="success">Removed from watchwish!</Alert>
      </Snackbar>
    </div>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
