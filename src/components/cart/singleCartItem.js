import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CloseIcon from "@material-ui/icons/Close";
import {useStyles} from "./singleCartItemStyles";






function Eachcartitem({ item, addtocart, removefromcart }) {
  const classes = useStyles()
  return (
    <div className={classes.cartItem}>
      <div>
        <img src={item.imageURL} alt={item.name} className={classes.cartImage} />
      </div>
      <div className={classes.productDetails}>
        <h5>{item.name}</h5>
        <div className={classes.itemcontainer}>
          <div className={classes.iconcontainer}>
            <div className={classes.icons}>
            <RemoveCircleIcon
              style={{ color: "#d90166" }}
              onClick={() => removefromcart()}
            />
            </div>
            

            {item.count}
            <div className={classes.icons}>
            <AddCircleIcon
              style={{ color: "#d90166" }}
              onClick={() => addtocart()}
            />
            </div>
            <div className={classes.icons}>
            <CloseIcon onClick={() => removefromcart()} />
            </div>
            <span> Rs.{item.price}</span>
          </div>
          <div className="itemprice">Rs. {item.price * item.count}</div>
        </div>
      </div>
    </div>
  );
}
export default Eachcartitem;
