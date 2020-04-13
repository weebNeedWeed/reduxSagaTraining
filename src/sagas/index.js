import { all, fork } from "redux-saga/effects";

import taskSaga from "./task";

function* root() {
  yield all([fork(taskSaga)]);
}

export default root;
