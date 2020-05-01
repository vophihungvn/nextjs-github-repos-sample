import { handleActions } from "redux-actions";
import { types } from "./repo.meta";

const initialState = {
  repos: [],
  detail: {},
  loading: false,
};

const getRepos = (state) => ({
  ...state,
  loading: true,
});

const getReposSuccess = (state, action) => ({
  ...state,
  loading: false,
  repos: action.payload,
});

const getRepoDetail = (state) => ({
  ...state,
  loading: true,
});

const getRepoDetailSuccess = (state, action) => ({
  ...state,
  loading: false,
  detail: action.payload,
});

export default handleActions(
  {
    [types.GET_REPOS]: getRepos,
    [types.GET_REPOS_SUCCESS]: getReposSuccess,
    [types.GET_REPO_DETAIL]: getRepoDetail,
    [types.GET_REPO_DETAIL_SUCCESS]: getRepoDetailSuccess,
  },
  initialState
);
