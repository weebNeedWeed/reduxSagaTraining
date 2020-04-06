import React from "react";

import TaskItem from "./../TaskItem/Index";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import PropTypes from "prop-types";

// @prop status: one status element in STATUSES const
function TaskList({ status, tasks }) {
	const renderTaskItem = function () {
		let xhtml = tasks.map((task) => {
			return <TaskItem task={task} status={status} key={task.id} />;
		});
		return xhtml;
	};
	return (
		<Grid key={status.value} item md={4} xs={12}>
			<Box mb={2} mt={2}>
				<strong>{status.label}</strong>
			</Box>
			<div>{renderTaskItem()}</div>
		</Grid>
	);
}

TaskList.propTypes = {
	status: PropTypes.shape({
		value: PropTypes.number,
		label: PropTypes.string,
	}),

	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			status: PropTypes.number,
			title: PropTypes.string,
			description: PropTypes.string,
		}),
	),
};

export default TaskList;
