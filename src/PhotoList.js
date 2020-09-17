import React from "react";
import Photo from "./Photo";

import GridList from "@material-ui/core/GridList";

function PhotoList({ photos }) {
  return (
    <GridList style={{ display: "flex", justifyContent: "center" }}>
      {photos.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </GridList>
  );
}

export default PhotoList;
