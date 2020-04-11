import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import defaultCustomTheme from "./commons/theme/index";

import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultCustomTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
