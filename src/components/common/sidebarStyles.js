import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: "96%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    sidebar: {
      display:(media)=>(media.sm && "none"),
      backgroundColor: "#E5E5E5",
      height: "100%"
    },
    sidebaritem: {
      padding: "1rem",
      borderBottom: "1px solid grey",
      cursor: "pointer"
  
    },
    sidedropdown: {
      display: (media)=>(media.sm ? "block": "none")
  
    }
  }));