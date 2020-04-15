import { takeLatest, call, put, delay, all, select } from "redux-saga/effects";

import taskConstants from "./../constants/task";

import { fetchListTaskFromApi } from "./../callApi/task";

import * as taskActions from "./../actions/task";
import * as uiActions from "./../actions/ui";

import { showErrorMessage } from "./../commons/utils/showToastMessage";

function* fetchListTaskRequest() {
  yield put(uiActions.setGlobalLoading(true));

  try {
    const response = yield call(fetchListTaskFromApi);

    const filterKeyword = yield select((state) => state.task.filterKeyword);

    const filteredTask = response.data.filter((task) =>
      task.title.includes(filterKeyword),
    );

    yield put(taskActions.fetchListTaskSuccess(filteredTask));
  } catch (error) {
    showErrorMessage(error.message);
    yield put(taskActions.fetchListTaskFailed(error));
  }

  yield delay(1000);
  yield put(uiActions.setGlobalLoading(false));
}

function* filterTaskRequest() {
  yield delay(500);

  yield put(taskActions.fetchListTaskRequest());
}

function* root() {
  yield all([
    takeLatest(taskConstants.FETCH_TASK_REQUEST, fetchListTaskRequest),
    takeLatest(taskConstants.FILTER_TASK_REQUEST, filterTaskRequest),
  ]);
}

export default root;
