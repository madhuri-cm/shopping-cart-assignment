import React from "react";
import { connect } from "react-redux";
import { changecartstatus } from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, useMediaQuery } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  rrot: {
    flexGrow: 1

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 4px 4px #E5E5E5",
    paddingBottom: "5px"

  },
  topLogoContainer: {
    height: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },

  logo: {
    objectFit: "contain",

    display: "flex",
    height: "30px",
  },
  logoName: {
    height: 80,
    display: "flex",
    color: "#114EB1",
    paddingLeft: 5,
    alignItems: "center",
  },
  logoNameText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Dosis",
    color: "red",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  homeBtn: {
    padding: "0 10px",
  },
  rightButtons: {
    width: "100%",
    display: "flex",
    justifyContent: (media) => (media.sm ? "center" : "flex-end"),
    marginRight: (media) => (media.sm ? "10px" : "50px"),
    alignItems: "center",
  },
  registerBtn: {
    marginRight: "20px",
  },
  loginBtn: {
    marginRight: "20px",
  },
  cartBtnContainer: {
    display: "flex",
    justifyContent: (media) => (media.sm ? "flex-end" : "flex-end"),
    marginRight: (media) => (media.sm ? "50px" : "50px"),
  },
  cartBtn: {
    cursor: "pointer",
    height: "30px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#9e9e9e2e",
  },
  cartIcon: {
    width: "20px",
    height: "20px",
  },
  linkStyles: {
    textDecoration: "none",
    color: "black",
  },
  leftBtns: {
   marginLeft: "30px",
   display: "flex"
  },
  flex: {
    flex: 1,
    display: "flex"
  },
  avatar: {
    margin: "10px 0",
    display: "flex"
  }
}));

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
          {/* <div className={classes.leftBtns}>
          <div className={classes.topLogoContainer}>
            
            <div className={classes.logo}>
              <img
                src="/static/images/logo.png"
                alt="logo"
                className={classes.logo}
              />
            </div>
          </div>

          <div className={classes.homeBtn}>
            <Link to={"/home"} className={classes.linkStyles}>
              Home
            </Link>
          </div>
          <div className={classes.productBtn}>
            <Link to={"/products"} className={classes.linkStyles}>
              Products
            </Link>
          </div>
          </div>
          <div className={classes.rightButtons}>
            <div className={classes.registerBtn}>

            </div>
            <div className={classes.loginBtn}>

            </div>
          </div> */}
        </Toolbar>
        {/* <div className={classes.cartBtnContainer}>
          <div
            className={classes.cartBtn}
            onClick={() => props.changecartStatus()}
          >
            <ShoppingCartIcon className={classes.cartIcon} style={{color:"#d90166"}} />
            <span> {cartValue} items </span>
          </div>
        </div> */}
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
