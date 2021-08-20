import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {      
        backgroundColor: "#FFFFFF",
        display: (media) => (media.sm ? "block" : "grid"),
        gridTemplateColumns: "25% 75%",
        marginTop: "50px",


    }
}))
