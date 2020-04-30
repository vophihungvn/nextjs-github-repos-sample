import { createAction } from "redux-actions";

export const types = {
  GET_REPOS: "GET_REPOS",
  GET_REPOS_SUCCESS: "GET_REPOS_SUCCESS",
};

export const actionCreator = {
  getRepos: createAction(types.GET_REPOS),
  getReposSuccess: createAction(types.GET_REPOS_SUCCESS),
};
