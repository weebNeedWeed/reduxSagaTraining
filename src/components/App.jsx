import React, { Fragment } from "react";

import TaskBoardContainer from "./TaskBoard/Container";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalLoadingContainer from "./GlobalLoading/Container";

function App() {
  return (
    <Fragment>
      <TaskBoardContainer />
      <ToastContainer />
      <GlobalLoadingContainer />
    </Fragment>
  );
}

export default App;
