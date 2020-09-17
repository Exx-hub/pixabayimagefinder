import React from "react";

import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Dialog } from "@material-ui/core";

const useStyle = makeStyles({
  icon: {
    color: "#fff",
  },
  image: {
    height: "270px",
    width: "100%",
  },
  tile: {
    width: "30%",
    margin: "10px",
    height: "270px",
  },
});

function Photo({ photo }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyle();
  return (
    <>
      <GridListTile className={classes.tile}>
        <img src={photo.webformatURL} alt="" className={classes.image} />
        <GridListTileBar
          title={photo.tags}
          subtitle={`by ${photo.user}`}
          actionIcon={
            <IconButton onClick={handleClickOpen}>
              <ZoomInIcon className={classes.icon} />
            </IconButton>
          }
        />
      </GridListTile>

      <Dialog open={open} onClose={handleClose}>
        <Card>
          <img src={photo.webformatURL} alt="" />
        </Card>
      </Dialog>
    </>
  );
}

export default Photo;
