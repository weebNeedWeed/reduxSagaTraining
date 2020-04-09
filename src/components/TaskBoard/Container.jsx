import React, { useState } from "react";

import TaskBoard from "./Index";

import { STATUSES } from "./../../constants/index";

function TaskBoardContainer() {
  const tasks = [
    {
      id: 0,
      status: 0,
      title: "read",
      description: "read book",
    },
    {
      id: 1,
      status: 1,
      title: "write",
      description: "write book",
    },
    {
      id: 2,
      status: 2,
      title: "done",
      description: "done",
    },
  ];

  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <TaskBoard
      statuses={STATUSES}
      tasks={tasks}
      handleCloseForm={handleCloseForm}
      handleOpenForm={handleOpenForm}
      openForm={openForm}
    />
  );
}

export default TaskBoardContainer;
