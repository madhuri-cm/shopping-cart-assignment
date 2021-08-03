import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css"
import {
  changecartstatus,
  addtocart,
  removefromcart,
  fetchfromcart
} from "../../redux/cart/cartAction"
import Modal from "@material-ui/core/Modal";
import Eachcartitem from "./singleCartItem"

function Cart({
  cartproductsData,
  changecartStatus,
  addtoCart,
  removefromCart,
  fetchCartproducts,
}) {
    useEffect(() => {
        fetchCartproducts()

    }, [])
    console.log(cartproductsData)
  const itemnumber = cartproductsData.cartproducts.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const checkoutprice = cartproductsData.cartproducts.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

 


  return (
    <div>
      {console.log(fetchCartproducts, "cart")}
      <Modal
        open={cartproductsData.cartopen}
        onClose={() => changecartStatus()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modalcontainer">
          <div>
            <h3>My Cart ({itemnumber} item)</h3>
          </div>
          {cartproductsData.cartproducts.filter((item) => item.count).length ? (
            <>
              {" "}
              <div className="allcartproducts">
                {cartproductsData.cartproducts
                  .filter((item) => item.count)
                  .map((item) => (
                    <Eachcartitem
                      item={item}
                      key={item.id}
                      addtocart={() => addtoCart(item)}
                      removefromcart={() => removefromCart(item)}
                    />
                  ))}
                <div className="lowestpricebanner">
                  <img src="/static/images/lowest-price.png" />
                  <small>You won't find cheaper anywhere</small>
                </div>
              </div>
              <div>
                <div style={{ textAlign: "center", padding: "0.5rem" }}>
                  <small>Promo code can be applied on payment page</small>
                </div>
                <div className="checkout">
                  <small>Proceed to Checkout</small>
                  <small>Rs.{checkoutprice}</small>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="emptycarttext">
                <h4>No items in your cart</h4>
                <small>Your favourite items are just a click away</small>
              </div>
              <div className="startshopping" onClick={() => changecartStatus()}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Start Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
    console.log(state)
  return {
    cartproductsData: state.cartproducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartproducts: () => dispatch(fetchfromcart()),
    changecartStatus: () => dispatch(changecartstatus()),
    addtoCart: (product) => dispatch(addtocart(product)),
    removefromCart: (product) => dispatch(removefromcart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);