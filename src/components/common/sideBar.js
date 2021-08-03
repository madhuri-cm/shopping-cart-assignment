import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

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

  }

}));

function Sidebar(props) {
  const classes = useStyles();
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
      <div >
        {props.categories.map((element) => (
          <div
            id={element.id}
            key={element.id}
            value={element.id}
            //style={category === element.id && { background: "grey" }}
            className={
             classes.sidebaritem +
              (category === element.id ? classes.selectedsidebar : "")
            }
            onClick={(e) => onselectionchange(e)}
          >
            {element.name}
          </div>
        ))}
      </div>
      <div className="sidedropdown">
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
