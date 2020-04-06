import React, { Fragment } from "react";

import TaskBoardContainer from "./TaskBoard/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<TaskBoardContainer />
		</Fragment>
	);
}

export default App;
