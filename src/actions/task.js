import taskConstants from "./../constants/task";

/*
 * dispatch fetchListTaskReset action to reset state data
 * then call fetchListTaskFromApi to fetch data from server
 * then dispatch fetchListTaskSuccess action to approve data
 * or dispatch fetchListTaskFailed action when error
 */
export const fetchListTaskRequest = function (keyword = "") {
  return {
    type: taskConstants.FETCH_TASK_REQUEST,
    payload: {
      keyword,
    },
  };
};

export const fetchListTaskSuccess = function (data) {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = function (error) {
  return {
    type: taskConstants.FETCH_TASK_RESET,
    payload: {
      error,
    },
  };
};

// filter task

/*
 * Filter task saga
 * filterTaskRequest -> filterTaskSuccess
 */

export const filterTaskRequest = function (filterKeyword) {
  return {
    type: taskConstants.FILTER_TASK_REQUEST,
    payload: {
      filterKeyword,
    },
  };
};
export const filterTaskSuccess = function (data) {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
