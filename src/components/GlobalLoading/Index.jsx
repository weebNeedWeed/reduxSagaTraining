import React from "react";

import useStyles from "./styles";

import globalLoadingImage from "./../../assets/images/loading/globalLoading.gif";

function GlobalLoading() {
  const classes = useStyles();

  return (
    <div className={classes.globalLoading}>
      <img
        src={globalLoadingImage}
        className={classes.globalLoading__image}
        alt="loading"
      />
    </div>
  );
}

export default GlobalLoading;
