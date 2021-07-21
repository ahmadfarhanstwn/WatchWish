import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#141414",
    color: "white",
    borderTopLeftRadius: "5%",
    borderTopRightRadius: "5%",
    position: "absolute",
    width: "100%",
    height: "50%",
    top: "50%",
    left: "auto",
    right: "auto",
    bottom: "auto",
    padding: "20px",
    overflow: "auto",
    display: "block",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0",
      height: "0",
    },
  },
  detailPoster: {
    width: "150px",
    height: "225px",
    borderRadius: "5%",
  },
  imageTitle: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
  },
  detailItem: {
    marginRight: "20px",
  },
  detailRating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    color: "#A9A9A9",
  },
  advanceDetails: {
    "& span hr": {
      color: "#A9A9A9",
    },
  },
}));
