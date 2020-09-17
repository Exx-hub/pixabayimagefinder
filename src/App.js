import React, { useState, useEffect } from "react";
import axios from "axios";

import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import PhotoList from "./PhotoList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  menuicon: {
    marginRight: "20px",
  },
  textField: {
    marginTop: "10px",
    width: "20%",
    minWidth: "150px",
  },
});

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://pixabay.com/api/?key=18345084-0bceaf1185205ae721390dbfa&q=${query}&image_type=photo&per_page=${amount}`
      );
      console.log(result.data.hits);
      setPhotos(result.data.hits);
    };
    getData();
  }, [amount, query]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <MenuIcon className={classes.menuicon} />
          <Typography variant="h4">PixaBay Image Finder</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        label="Search for Images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={classes.textField}
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={classes.textField}
      />
      <PhotoList photos={photos} />
    </div>
  );
}

export default App;
