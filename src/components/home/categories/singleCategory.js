
import React from "react";
import { ButtonWithText } from "../../common/button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container, useStyles } from "./singleCategoryStyles";




const SingleCategory = (props) => {
  const matches_sm = useMediaQuery("(max-width:400px)");

  const classes = useStyles({ sm: matches_sm });

  return (
    <React.Fragment>
      <Container reverse={props.reverse}>
        <img
          src={props.data.imageUrl}
          className={classes.media}
          alt={props.data.name}
        />
        <div className={classes.cardAction}>
          <h2>{props.data.name}</h2>
          <p>{props.data.description}</p>
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
      </Container>
    </React.Fragment>
  );
};

export default SingleCategory;
