import { takeLatest, call, put, delay, all } from "redux-saga/effects";

import taskConstants from "./../constants/task";

import { fetchListTaskFromApi } from "./../callApi/task";

import * as taskActions from "./../actions/task";
import * as uiActions from "./../actions/ui";

import { showErrorMessage } from "./../commons/utils/showToastMessage";

function* fetchListTaskRequest({ payload }) {
  yield put(uiActions.setGlobalLoading(true));

  try {
    const response = yield call(fetchListTaskFromApi);

    const filteredTask = response.data.filter((task) =>
      task.title.includes(payload.keyword),
    );

    yield put(taskActions.fetchListTaskSuccess(filteredTask));
  } catch (error) {
    showErrorMessage(error.message);
    yield put(taskActions.fetchListTaskFailed(error));
  }

  yield delay(1000);
  yield put(uiActions.setGlobalLoading(false));
}

function* filterTaskRequest({ payload }) {
  yield delay(500);

  const { keyword } = payload;

  yield put(taskActions.fetchListTaskRequest(keyword));
}

function* root() {
  yield all([
    takeLatest(taskConstants.FETCH_TASK_REQUEST, fetchListTaskRequest),
    takeLatest(taskConstants.FILTER_TASK_REQUEST, filterTaskRequest),
  ]);
}

export default root;
