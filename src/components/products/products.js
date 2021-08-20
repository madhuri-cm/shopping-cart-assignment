import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { addtocart } from "../../redux/cart/cartAction"
import SingleProduct from "./singleProduct";
import {useStyles} from "./productsStyle"




function Products(props) {
  const matches_sm = useMediaQuery("(max-width:600px)");

  const classes = useStyles({ sm: matches_sm });
  return (
    <>
      {props.products.length ? (
        <div className={classes.mainContainer}>
          {props.products.map((element) => (
            <SingleProduct
              product={element}
              key={element.id}
              addtocart={() => props.addtoCart(element)}
            />
          ))}
        </div>
      ) : (
        <h1>No items available</h1>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtoCart: (element) => dispatch(addtocart(element)),
  };
};

export default connect(null, mapDispatchToProps)(Products);