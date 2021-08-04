import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "96%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  sidebaritem: {
      padding: "1rem",
      borderBottom: "1 px solid grey",
      cursor: "pointer"
  },
  selectedsidebar: {
      background: "rgb(201, 200, 200)"

  },
  drawer: {
    [theme.breakpoints.up("xsmall")]: {
      width: "200px",
    },
    [theme.breakpoints.up("small")]: {
      width: "230px",
    },
    [theme.breakpoints.up("medium")]: {
      width: "230px",
    },
    [theme.breakpoints.up("large")]: {
      width: "300px",
    },
    flexShrink: 0,
  },
  navigationContainer: {
    height: `calc(100% - 60px)`,
    padding: "6% 6% 0% 6%",
  },
  navigationMenuContainer: {
    height: `calc(100% - 60px)`,
  },
  list: {
    width: "100%",
  },
  listItem: {
    height: "35px",
    padding: "0px 0px 0px 7px",
  },

}));

function Sidebar(props) {
  const classes = useStyles();
  const [category, setcategory] = React.useState("");
  const onselectionchange = (e) => {
    const tempcategory = e.target.id || e.target.value || "";
    props.eventhandler(
      category === (e.target.id || e.target.value) ? "" : tempcategory
    );
    category === (e.target.id || e.target.value)
      ? setcategory("")
      : setcategory(e.target.id || e.target.value);
  };
  return (
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    >
    <div className={classes.navigationContainer}>
      <div className={classes.navigationMenuContainer}>
        <List 
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.list}
        >
        {props.categories.map((element) => (
          <ListItem
            id={element.id}
            key={element.id}
            value={element.id}
            className={
             classes.sidebaritem +
              (category === element.id ? classes.selectedsidebar : "")
            }
            onClick={(e) => onselectionchange(e)}
          >
            {element.name}
          </ListItem>
        ))}
        </List>
      </div>

    </div>
    </Drawer>
  );
}

export default Sidebar;
