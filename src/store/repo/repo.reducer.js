import { handleActions } from "redux-actions";
import { types } from "./repo.meta";

const initialState = {
  repos: [],
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

export default handleActions(
  {
    [types.GET_REPOS]: getRepos,
    [types.GET_REPOS_SUCCESS]: getReposSuccess,
  },
  initialState
);
