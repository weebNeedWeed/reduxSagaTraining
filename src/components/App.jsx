import React, { Fragment } from "react";

import TaskBoardContainer from "./TaskBoard/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <TaskBoardContainer />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
