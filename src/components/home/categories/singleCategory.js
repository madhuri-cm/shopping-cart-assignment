import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ButtonWithText } from "../../common/button";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";




export const Container = styled.div`
  max-width: 100%;
  display: flex;
  padding: 1.5rem;
  box-shadow: 0px 8px 11px 0px #00000014;
  flex-direction: ${(props) => (props.reverse ? "row" : "row-reverse")};
  align-items: center;
  object-fit: contain;
`;

const useStyles = makeStyles((theme) => ({
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
    height: (media) => (media.sm ? 150 : 250),
    width: (media) => (media.sm ? 150 : 250)
  },
  cardAction: {
    textAlign: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"



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

const SingleCategory = (props) => {
  const matches_sm = useMediaQuery("(max-width:400px)");

  const classes = useStyles({sm:matches_sm});

  

  return (
    <React.Fragment>
      <Container reverse={props.reverse} >
        <img
          src={props.data.imageUrl}
          className={classes.media}
          alt={props.data.name}
        />
        <div className={classes.cardAction}>
          <h2>
          
          {props.data.name}
        
          </h2>
          <p>
         
          {props.data.description}
        
          </p>
          <ButtonWithText
            dispText={`explore ${props.data.key}`}
            color="#FFFFFF"
            backgroundColor="#d90166"
            borderColor="#d90166"
            borderRadius="1px"
            height="40px"
            fontSize="12px"
          />
        </div>

        {/* <Card key={props.data.name} className={classes.root}>
                  <CardActionArea className={classes.cardAction}>
                    <CardMedia
                      className={classes.media}
                      image={props.data.imageUrl}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.cardHeading}>
                        {props.data.name}
                      </Typography>
                      <Typography className={classes.cardDescription}>
                        {props.data.description}
                      </Typography>
                      <div className={classes.buttonContainer}>
                        <ButtonWithText
                          dispText={`explore ${props.data.key}`}
                          color="#FFFFFF"
                          backgroundColor="#d90166"
                          borderColor="#d90166"
                          borderRadius="1px"
                          height="40px"
                          fontSize="15px"
                        />
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card> */}
      </Container>
    </React.Fragment>
  );
};

export default SingleCategory;
