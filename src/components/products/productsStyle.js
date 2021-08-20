import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: (media) => (media.sm ? "center" : "space-between"),
        background: "white",
        paddingTop: "20px"
    }

}))