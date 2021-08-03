import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import signupPage from "./components/userAuth/register";
import NavBar from "./components/common/navBar";
import React, { useEffect, Suspense } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Home from "./components/home/homePage";
import Productlandingpage from "./components/products/productPage";
const Cart = React.lazy(() => import("./components/cart/cart"));

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: `calc(100% - 50px)`,
    overflow: "auto",
    borderRadius: 5,
    transform: `translate(0, 50px)`,
    backgroundColor: "#FFFFFF",
  },
  container: {
    width: "100%",
    height: "calc(100% - 50px)",
  },
  root: {
    display: "flex",
    background: "#FFFFFF",
    opacity: 1,
    height: "100vh",
    width: "100vw",
  },
}));
const StyledContainer = withStyles((theme) => ({
  root: {
    padding: "0px",
  },
}))(Container);

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <StyledContainer className={classes.container}>
            <Switch>
              <Route path="/signup" component={signupPage} />
              <Route path="/home" component={Home} />
              <Route path="/products" component={Productlandingpage} />
              <Route path="/Cart" component={Cart} />
              </Switch>
  
              <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
              

   
          </StyledContainer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
