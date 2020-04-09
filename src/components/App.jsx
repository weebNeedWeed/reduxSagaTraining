import React from "react";

import TaskBoardContainer from "./TaskBoard/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

import ThemeProvider from "@material-ui/styles/ThemeProvider";

import defaultCustomTheme from "./../commons/theme/index";

import { Provider } from "react-redux";

import configureStore from "./../redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultCustomTheme}>
        <CssBaseline />
        <TaskBoardContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
