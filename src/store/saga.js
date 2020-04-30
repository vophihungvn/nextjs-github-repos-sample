import { all, fork } from "redux-saga/effects";
import repo from "./repo/repo.saga";

export default function* mainSaga() {
  yield all([fork(repo)]);
}
