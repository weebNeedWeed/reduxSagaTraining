import React from "react";

import TaskBoardContainer from "./TaskBoard/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

import ThemeProvider from "@material-ui/styles/ThemeProvider";

import defaultCustomTheme from "./../commons/theme/index";

function App() {
	return (
		<ThemeProvider theme={defaultCustomTheme}>
			<CssBaseline />
			<TaskBoardContainer />
		</ThemeProvider>
	);
}

export default App;
