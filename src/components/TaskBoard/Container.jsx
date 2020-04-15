import React, { useEffect } from "react";

import TaskBoard from "./Index";

import { STATUSES } from "./../../constants/index";

import * as modalActions from "./../../actions/modal";

import { fetchListTaskRequest } from "./../../actions/task";

import { useDispatch, useSelector } from "react-redux";

function TaskBoardContainer() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.listTask);

  useEffect(() => {
    dispatch(fetchListTaskRequest());
  }, [dispatch]);

  const openTaskCreator = () => {
    dispatch(modalActions.changeDisplayStatus(true));
    dispatch(modalActions.changeModalTitle("Them moi"));
    dispatch(modalActions.changeModalContent(<p>sdadas</p>));
  };

  return (
    <div>
      <TaskBoard
        statuses={STATUSES}
        tasks={tasks}
        openTaskCreator={openTaskCreator}
      />
    </div>
  );
}

export default TaskBoardContainer;
