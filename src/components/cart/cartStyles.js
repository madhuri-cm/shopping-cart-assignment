import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme) => ({
    modalContainer: {
      position: "absolute",
      width: "400px",
      minHeight: "80%",
      maxHeight: "85%",
      height: "auto",
      backgroundColor: "#FFFFFF",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    cartHeader: {
      padding: "1rem",
      backgroundColor: "black",
      color: "white"
    },
    cartProductsContainer: {
      padding: "0.5rem",
      flex: 1,
      backgroundColor: "#8080801a",
      overflow: "auto"
    },
    emptycarttext: {
      textAlign: "center"
    },
    startshopping: {
      width: "100%",
      padding: "1rem 0",
      backgroundColor: "#d90166",
      textAlign: "center"
    },
    banner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0.5rem",
      backgroundColor: "white",
      marginTop: "0.5rem"
    },
    checkout: {
      background: "#e75480",
      color: "white",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between"
    }
    
  
  }))