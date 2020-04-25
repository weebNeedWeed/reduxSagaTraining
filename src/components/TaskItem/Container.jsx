import React from "react";

import TaskItem from "./Index";

import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";

import TaskFormContainer from "./../TaskForm/Container";

function TaskItemContainer(props) {
  const dispatch = useDispatch();

  const onHandleEdit = function () {
    const { task } = props;

    const onSubmitForm = function (data) {
      const cloneData = {
        ...data,
        status: parseInt(data.status, 10),
      };

      dispatch(taskActions.editTaskRequest(cloneData));
    };

    dispatch(modalActions.changeDisplayStatus(true));
    dispatch(modalActions.changeModalTitle("on editing"));
    dispatch(
      modalActions.changeModalContent(
        <TaskFormContainer initialValues={task} onSubmitForm={onSubmitForm} />,
      ),
    );
  };

  return <TaskItem onHandleEdit={onHandleEdit} {...props} />;
}

TaskItemContainer.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default TaskItemContainer;
