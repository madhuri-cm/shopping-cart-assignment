import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  padding: 1.5rem;
  box-shadow: 0px 8px 11px 0px #00000014;
  flex-direction: ${(props) => (props.reverse ? "row" : "row-reverse")};
  align-items: center;
  object-fit: contain;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: "250px",
    padding: "20px",
    marginBottom: "10px",
    flexDirection: "row-reverse",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    "&:focus": {
      backgroundColor: "#FFFFFF",
    },
    boxShadow: "0px 8px 11px 0px #00000014",
  },
  media: {
    height: (media) => (media.sm ? 125 : 250),
    width: (media) => (media.sm ? 200 : 400),
  },
  cardAction: {
    textAlign: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardContent: {
    width: `calc(100% - 300px)`,
    height: "100%",
  },
  cardHeading: {
    fontSize: "30px",
    fontWeight: 700,
    fontStyle: "normal",
    display: "flex",
    justifyContent: "center",
    lineHeight: "80px",
  },
  cardDescription: {
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    wordWrap: "break-word",
    wordBreak: "break-all",
    height: "80px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));