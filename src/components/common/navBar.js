import React from "react";
import { connect } from "react-redux";
import { changecartstatus } from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useMediaQuery } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles } from "./navbarStyles";



const NavBar = (props) => {
  const matches_sm = useMediaQuery("(max-width:600px)");

  const classes = useStyles({ sm: matches_sm });
  const cartValue = props.cartproductsData.cartproducts.reduce(
    (sum, item) => sum + item.count,
    0
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} >
        <Toolbar>
          <div className={classes.flex}>
          <img
                src="/static/images/logo.png"
                alt="logo"
                className={classes.logo}
              />
            <div className={classes.leftBtns}>
              <div className={classes.homeBtn}>
              <Link to={"/home"} className={classes.linkStyles}>
              Home
            </Link>
              </div>
              <div>
              <Link to={"/products"} className={classes.linkStyles}>
              Products
            </Link>

              </div>
            


            </div>
 
          </div>
          <div>
            <div className={classes.avatar}>
              <div className={classes.registerBtn}>
            <Link to={"/signup"} className={classes.linkStyles}>
                Sign In
              </Link>
              </div>
              <Link to={"/login"} className={classes.linkStyles}>
                Login
              </Link>
             
            </div>
            <div
            className={classes.cartBtn}
            onClick={() => props.changecartStatus()}
          >
            <ShoppingCartIcon className={classes.cartIcon} style={{color:"#d90166"}} />
            <span> {cartValue} items </span>
          </div>

          </div>


        </Toolbar>

      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartproductsData: state.cartproducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changecartStatus: () => dispatch(changecartstatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
