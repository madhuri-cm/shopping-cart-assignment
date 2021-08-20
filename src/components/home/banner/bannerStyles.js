import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        flexGrow: 1,
        paddingTop: "50px"
      },
      header: {
        display: "flex",
        alignItems: "center",
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default
      },
      img: {
        height: 255,
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%",
        objectFit: "contain"
      }
  }));