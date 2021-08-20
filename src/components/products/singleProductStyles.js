import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  mainContainer: {
    width: (media) => (media.sm ? "auto" : "200px"),
    objectFit: "contain",
    borderBottom: "1px solid #00000029",
    padding: "0.5rem",
  },
  title: {
    height: "40px",
    overflow: "hidden",
  },
  btn: {
    padding: "0.4rem",
    width: "90px",
    background: "#da2020e3",
    border: "none",
    color: "white",
  },
  price: {
    padding: "0.5rem 0rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    fontSize: "small",
    background: "#80808029",
    padding: "0.5rem",
    height: (media) => (media.sm ? "150px" : "80px"),
    overflow: "hidden",
    width:(media) => (media.sm && "50%")
  },
  productContainer: {
      display:(media) => (media.sm ? "flex": "block"),
      width: "100%"
  }
}));

