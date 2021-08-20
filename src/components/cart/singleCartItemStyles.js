import { makeStyles } from "@material-ui/core"
export const useStyles = makeStyles((theme) => ({
    cartItem: {
      height: "80px",
      display: "flex",
      padding: "0.3rem",
      backgroundColor: "white",
      marginBottom: "0.5rem"
    },
    cartImage: {
      width: "80px"
    },
    productDetails: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    },
    itemcontainer: {
      display: "flex",
      alignItems: "center"
    },
    iconcontainer: {
      display: "flex",
      alignItems: "center",
      flex: "1"
    },
    itemprice: {
      display: "flex",
      justifContent: "flex-end"
    },
    icons: {
      margin: "0 10px"
    }
  
  }))