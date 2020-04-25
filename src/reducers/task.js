import taskConstants from "../constants/task";

const initialState = {
  listTask: [],
  filterKeyword: "",
};

const taskReducer = (state = initialState, action) => {
  const clone = [...state.listTask];

  switch (action.type) {
    case taskConstants.FETCH_TASK_REQUEST:
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
    case taskConstants.FILTER_TASK_REQUEST:
      return {
        ...state,
        filterKeyword: action.payload.filterKeyword,
      };
    case taskConstants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case taskConstants.ADD_TASK_REQUEST:
      return {
        ...state,
      };
    case taskConstants.ADD_TASK_SUCCESS:
      return {
        ...state,
        listTask: state.listTask.concat(action.payload.data),
      };
    case taskConstants.ADD_TASK_FAILED:
      return {
        ...state,
      };
    case taskConstants.EDIT_TASK_REQUEST:
      return {
        ...state,
      };
    case taskConstants.EDIT_TASK_SUCCESS:
      clone[clone.findIndex((elm) => elm.id === action.payload.data.id)] =
        action.payload.data;
      return {
        ...state,
        listTask: clone,
      };
    default:
      return state;
  }
};

export default taskReducer;
