import taskConstants from "../constants/task";

const initialState = {
  listTask: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK_RESET:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case taskConstants.FETCH_TASK_FAILED:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    default:
      return state;
  }
};

export default taskReducer;
