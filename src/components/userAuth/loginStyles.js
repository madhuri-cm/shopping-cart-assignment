import { makeStyles, TextField, withStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
      display: (media) => (media.sm ? "block" : "flex"),
      maxWidth: "100%",
      height: `calc(100% - 50px)`,
      padding: "10px",
      marginTop: "20px",
      justifyContent: "center",
    },
    textContainer: {
      marginTop: "20px",
      marginRight: "30px",
    },
    signupHeader: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "10px",
    },
    signupText: {
      fontSize: "15px",
      fontWeight: 500,
    },
    formContainer: {
      justifyContent: "center",
      width: "40%",
    },
    inputContainer: {
      width: "300px",
      marginBottom: "10px",
    },
    inputFieldContainer: {
      width: "300px",
    },
    signupButton: {
      width: "300px",
      marginTop: "30px",
    },
  }));

  export const CustomTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#7AD7F0",
      },
      "& .MuiInput-underline:hover": {
        borderBottomColor: "#7AD7F0",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#7AD7F0",
      },
  
    },
  })(TextField);