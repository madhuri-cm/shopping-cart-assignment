import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { useMediaQuery } from "@material-ui/core";
import {useStyles} from "./sidebarStyles"





function Sidebar(props) {
  const matches_sm = useMediaQuery("(max-width:600px)");

  const classes = useStyles({ sm: matches_sm });
  const [category, setcategory] = React.useState("");
  const onselectionchange = (e) => {
    console.log(e.target.id || e.target.value);
    const tempcategory = e.target.id || e.target.value || "";
    props.eventhandler(
      category === (e.target.id || e.target.value) ? "" : tempcategory
    );
    console.log(category === (e.target.id || e.target.value));
    category === (e.target.id || e.target.value)
      ? setcategory("")
      : setcategory(e.target.id || e.target.value);
  };
  return (
    <div>
      <div className={classes.sidebar}>
        {props.categories.map((element) => (
          <div
            id={element.id}
            key={element.id}
            value={element.id}
            //style={category === element.id && { background: "grey" }}
            className={
              classes.sidebaritem +
              (category === element.id ?  classes.selectedsidebar : "")
            }
            onClick={(e) => onselectionchange(e)}
          >
            {element.name}
          </div>
        ))}
      </div>
      <div className={classes.sidedropdown}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={onselectionchange}
            label="Select"
          >
            {props.categories.map((element) => (
              <MenuItem key={element.id} value={element.id}>
                {element.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Sidebar;
