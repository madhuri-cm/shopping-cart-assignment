import React, { useState, useEffect } from "react";
import Sidebar from "../common/sideBar";
import Products from "../products/products";
import { connect } from "react-redux";
import { fetchProducts } from  "../../redux/product/productAction"
import { fetchCategories } from "../../redux/category/categoryAction";
import {  useMediaQuery } from "@material-ui/core";
import {useStyles} from "./productPageStyles"



function Productlandingpage({
  productsData,
  categoriesData,
  fetchCategories,
  fetchProducts,
}) {
  const matches_sm = useMediaQuery("(max-width:600px)");

  const classes = useStyles({ sm: matches_sm });
  const [currentproducts, setcurrentproducts] = useState([]);
  const [rerender, setrerender] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

 

  const eventhandler = (data) => {
    const filtereddata = data
      ? productsData.products.filter((item) => item.category == data)
      : productsData.products;
    setcurrentproducts(filtereddata);
    setrerender(true);
  };
  return (
    <div className={classes.mainContainer}>
      <Sidebar
        categories={categoriesData.categories}
        className="selectionbar"
        eventhandler={eventhandler}
      />
      {!rerender && <Products products={productsData.products} />}
      {rerender && <Products products={currentproducts} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsData: state.products,
    categoriesData: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productlandingpage);