import React, { useState, useEffect } from "react";

import TaskBoard from "./Index";

import { STATUSES } from "./../../constants/index";

import { fetchListTaskRequest } from "./../../actions/task";

import { useDispatch, useSelector } from "react-redux";

function TaskBoardContainer() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.listTask);

  useEffect(() => {
    dispatch(fetchListTaskRequest());
  }, [dispatch]);

  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <div>
      <TaskBoard
        statuses={STATUSES}
        tasks={tasks}
        handleCloseForm={handleCloseForm}
        handleOpenForm={handleOpenForm}
        openForm={openForm}
      />
    </div>
  );
}

export default TaskBoardContainer;
