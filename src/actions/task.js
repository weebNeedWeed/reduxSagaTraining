import { fetchListTaskFromApi } from "./../callApi/task";

import taskConstants from "./../constants/task";

import { showErrorMessage } from "./../commons/utils/showToastMessage";

/*
 * dispatch fetchListTaskReset action to reset state data
 * then call fetchListTaskFromApi to fetch data from server
 * then dispatch fetchListTaskSuccess action to approve data
 * or dispatch fetchListTaskFailed action when error
 */
export const fetchListTaskRequest = function () {
  return async (dispatch) => {
    dispatch(fetchListTaskReset());
    try {
      const response = await fetchListTaskFromApi();
      dispatch(fetchListTaskSuccess(response.data));
    } catch (error) {
      const message = error.message || taskConstants.FETCH_TASK_FAILED_MESSAGE;
      showErrorMessage(message);
      dispatch(fetchListTaskFailed(error));
    }
  };
};

export const fetchListTaskReset = function () {
  return {
    type: taskConstants.FETCH_TASK_RESET,
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
