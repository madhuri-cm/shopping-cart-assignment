import React, { useState } from "react";
import styled from "styled-components";
import { ButtonWithText } from "../common/button";
import { useMediaQuery } from "@material-ui/core";
import {useStyles} from "./singleProductStyles";
import Snackbar from "@material-ui/core/Snackbar";





function SingleProduct(props) {
  const matches_sm = useMediaQuery("(max-width:600px)");

  const classes = useStyles({ sm: matches_sm });
  const Container = styled.div`
    background-image: url(${props.product.imageURL});
    background-repeat: no-repeat;
    height: 200px;
    background-size: cover;
    @media (max-width: 600px) {
      height: 150px;
      width: 50%;
    }

  `;
    const [open, setopen] = useState(false);
    const handleClose = () => {
      setopen(false);
    };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.title}>
        <strong>{props.product.name}</strong>
      </div>
      <div className={classes.productContainer}>
      <Container></Container>
      
      <div className={classes.description}>{props.product.description}</div>
      </div>
      <div className={classes.price}>
        <span>MRP Rs.{props.product.price}</span>
        <ButtonWithText 
        dispText="Buy Now"
        color="#FFFFFF"
        backgroundColor="#d90166"
        borderColor="#d90166"
        borderRadius="1px"
        height= "30px"
        fontSize="15px"
        onClick={() => {
          setopen(true)
          props.addtocart();
         
          
        }}

        
        />

      </div>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <div
            style={{
              background: "green",
              color: "white",
            }}
          >
            <h1>Product Successfully Added to the Cart</h1>
          </div>
        </Snackbar>
      </div>

    </div>
  );
}

export default SingleProduct;
