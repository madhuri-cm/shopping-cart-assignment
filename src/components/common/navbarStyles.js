import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    rrot: {
      flexGrow: 1
  
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 4px 4px #E5E5E5",
      paddingBottom: "5px"
  
    },
    topLogoContainer: {
      height: "100%",
      padding: "10px",
      display: "flex",
      alignItems: "center",
    },
  
    logo: {
      objectFit: "contain",
  
      display: "flex",
      height: "30px",
    },
    logoName: {
      height: 80,
      display: "flex",
      color: "#114EB1",
      paddingLeft: 5,
      alignItems: "center",
    },
    logoNameText: {
      fontStyle: "normal",
      fontWeight: 400,
      fontFamily: "Dosis",
      color: "red",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  
    homeBtn: {
      padding: "0 10px",
    },
    rightButtons: {
      width: "100%",
      display: "flex",
      justifyContent: (media) => (media.sm ? "center" : "flex-end"),
      marginRight: (media) => (media.sm ? "10px" : "50px"),
      alignItems: "center",
    },
    registerBtn: {
      marginRight: "20px",
    },
    loginBtn: {
      marginRight: "20px",
    },
    cartBtnContainer: {
      display: "flex",
      justifyContent: (media) => (media.sm ? "flex-end" : "flex-end"),
      marginRight: (media) => (media.sm ? "50px" : "50px"),
    },
    cartBtn: {
      cursor: "pointer",
      height: "30px",
      width: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#9e9e9e2e",
    },
    cartIcon: {
      width: "20px",
      height: "20px",
    },
    linkStyles: {
      textDecoration: "none",
      color: "black",
    },
    leftBtns: {
      marginLeft: (media) => (media.sm ? "0px" : "30px"),
     display: "flex"
    },
    flex: {
      flex: 1,
      display: "flex"
    },
    avatar: {
      margin: "10px 0",
      display: "flex"
    }
  }));