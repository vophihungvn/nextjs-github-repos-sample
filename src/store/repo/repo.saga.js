import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { types, actionCreator } from "./repo.meta";

function* getRepos(action) {
  const { username } = action.payload;
  const response = yield axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  if (response.status === 200) {
    yield put(actionCreator.getReposSuccess(response.data));
  }
}

function* getRepoDetail(action) {
  const repo = action.payload;
  const response = yield axios.get(`https://api.github.com/repos/${repo}`);

  if (response.status === 200) {
    yield put(actionCreator.getRepoDetailSuccess(response.data));
  }
}

export default function* repoSaga() {
  yield takeLatest(types.GET_REPOS, getRepos);
  yield takeLatest(types.GET_REPO_DETAIL, getRepoDetail);
}
