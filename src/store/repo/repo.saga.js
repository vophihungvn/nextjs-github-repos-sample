import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { navigate } from "@reach/router";
import { types, actionCreator } from "./repo.meta";

function* getRepos(action) {
  const { username } = action.payload;
  const response = yield axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  if (response.status === 200) {
    yield put(actionCreator.getReposSuccess(response.data));
    yield call(navigate, "/repo-list");
  }
}

export default function* repoSaga() {
  yield takeLatest(types.GET_REPOS, getRepos);
}
