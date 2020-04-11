import { API_ENDPOINT } from "./../constants/index";

import apiCaller from "./../commons/utils/apiCaller";

export const fetchListTaskFromApi = () => {
  const apiEntity = {
    name: "tasks",
    url: API_ENDPOINT,
  };
  const taskFetcher = new apiCaller(apiEntity);
  taskFetcher.createEntity();
  return taskFetcher.endpoints[apiEntity.name].getAll();
};
